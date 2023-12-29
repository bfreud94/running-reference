import React, { createContext, FC, useCallback, useEffect, useState } from 'react'
import { changePageHelper, getHeaders } from '../functions'
import { Page, StateDataAndTotals, TableContextType, TableProviderProps } from './types'
import { useFetch } from './hooks'
import { initialData } from './initialData'
import { useNavigate } from 'react-router-dom'

export const TableContext = createContext<TableContextType>({
	currentPage: Page.HOME,
	data: initialData,
	headers: [],
	isLoading: true
})

const TableProvider: FC<TableProviderProps> = ({ children }) => {
	/*
	TODO:
	1. Styles
	2. Update Loading component (to use JS styles)
	3. Use interfaces for component props, types for everything else
	4. Numbers rounded to 0 only show one digit (3.40 shows 3.4 instead of 3.40)
	5. Maybe make a MonthTableRow, to isolate logic (left most row doesn't need to exist, and then we'll need conditionals for each cell - i.e cadence, hr)
	6. The routes don't do anything, i.e - if a user goes to /2023/March, they'll just be taken to the home screen instead of March 2023. Update this logic
	7. changePage function second param is data (being passed in on line 50), in the function declaration, it's called stateData. update this and make sure they're the same, while keeping alphabatized
	*/
	const [data, setData] = useState<StateDataAndTotals>(initialData)
	const [currentPage, setCurrentPage] = useState<Page>(Page.HOME)
	const { apiResponse, isLoading, status } = useFetch('http://localhost:8000/api/yearlyRuns')
	const navigate = useNavigate()

	const queryParams = children.props.match.params

	useEffect(() => {
		if (status === 'success' && Object.keys(data.currentData).length === 0) {
			const { totals, ...apiResponseData } = apiResponse
			setData({
				apiResponse,
				currentData: apiResponseData,
				currentTotals: apiResponse.totals
			})
		}
	}, [status])

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
		setCurrentPage
	}

	return (
		<TableContext.Provider value={value}>
			{children}
		</TableContext.Provider>
	)
}

export default TableProvider