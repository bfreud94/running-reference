import React, { FC, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { 
	TableContainer,
	Table as MuiTable
} from '@mui/material'
import Loading from '../Loading/Loading'
import TableBody from '../TableBody/TableBody'
import TableHeader from '../TableHeader/TableHeader'
import { getButtonLabel } from './functions'
import { useTableState } from '../../hooks'
import { Page } from '../types'
import { validMonths, validYears } from '../initialData'

const Table: FC = () => {
	const { changePage, currentPage, data, isLoading, isRunning, setIsRunning } = useTableState()
	const location = useLocation()

	useEffect(() => {
		if (!isLoading && Object.keys(data.currentData).length > 0) {
			const queryParams = location.pathname.split('/').filter(Boolean)
			if (queryParams.length === 1) {
				const year = queryParams[0]
				if (!validYears.includes(year)) {
					changePage(Page.HOME, '')
				} else if (Page.YEAR !== currentPage)  {
					changePage(Page.YEAR, queryParams[0])
				}
			} else if (queryParams.length === 2) {
				const year = queryParams[0]
				const month = queryParams[1]
				if (!validYears.includes(year) || !validMonths.includes(month)) {
					changePage(Page.HOME, '')
				} else if (Page.MONTH !== currentPage)  {
					changePage(Page.MONTH, queryParams[1])
				}
			}
		}
	}, [data, isLoading])

	return (
		<TableContainer>
			<button onClick={() => {
				setIsRunning(!isRunning)
				changePage(Page.HOME, '')
			}}>{getButtonLabel(isRunning)}</button>
			{isLoading ? <Loading /> : (
				<MuiTable>
					<TableHeader />
					<TableBody />
				</MuiTable>
			)}
		</TableContainer>
	)
}

export default Table