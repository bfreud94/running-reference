import React, { createContext, FC, useCallback, useEffect, useState } from 'react'
import { changePageHelper, getHeaders, getSport } from '../functions'
import { Page, StateDataAndTotals, TableContextType, TableProviderProps } from './types'
import { useFetch } from '../hooks'
import { initialData } from './initialData'
import { useNavigate } from 'react-router-dom'

export const TableContext = createContext<TableContextType>({
	currentPage: Page.HOME,
	changePage: () => {},
	data: initialData,
	headers: [],
	isLoading: true,
	isRunning: true,
	setIsRunning: () => {}
})

const TableProvider: FC<TableProviderProps> = ({ children }) => {
	const [data, setData] = useState<StateDataAndTotals>(initialData)
	const [isRunning, setIsRunning] = useState<boolean>(true)
	const [currentPage, setCurrentPage] = useState<Page>(Page.HOME)
	const sport = getSport(isRunning)
	const { apiResponse, isLoading, status } = useFetch(`http://localhost:8000/api/yearlyActivities?sport=${sport}`)
	const navigate = useNavigate()

	const queryParams = children ? children.props.match.params : {}

	useEffect(() => {
		if (status === 'success') {
			const { totals, ...apiResponseData } = apiResponse
			setData({
				apiResponse,
				currentData: apiResponseData,
				currentTotals: apiResponse.totals
			})
		}
	}, [status, isRunning])

	const changePage = useCallback(
		(destination: Page, timeframe: string) => changePageHelper(
			destination,
			data,
			navigate,
			queryParams,
			setData,
			setCurrentPage,
			timeframe
		),
		[data, currentPage]
	)
	
	const headers = getHeaders(currentPage)

	const value = {
		data,
		changePage,
		currentPage,
		headers,
		isLoading,
		setCurrentPage,
		isRunning,
		setIsRunning
	}

	return (
		<TableContext.Provider value={value}>
			{children}
		</TableContext.Provider>
	)
}

export default TableProvider