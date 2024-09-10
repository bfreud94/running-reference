import React, { useEffect } from 'react'
import { 
	TableContainer,
	Table as MuiTable
} from '@mui/material'
import { useLocation } from 'react-router-dom'
import { useTableState } from '../hooks'
import TableBody from '../TableBody/TableBody'
import TableHeader from '../TableHeader/TableHeader'
import Loading from '../Loading/Loading'
import { Page } from '../types'


const Table = () => {
	const { changePage, currentPage, data, isLoading } = useTableState()
	const location = useLocation()

	useEffect(() => {
		if (!isLoading && Object.keys(data.currentData).length > 0) {
			const queryParams = location.pathname.split('/').filter(Boolean)
			if (queryParams.length === 1) {
				if (Page.YEAR !== currentPage)  {
					changePage(Page.YEAR, queryParams[0])
				}
			} else if (queryParams.length === 2) {
				if (Page.MONTH !== currentPage)  {
					changePage(Page.MONTH, queryParams[1])
				}
			}
		}
	}, [data, isLoading])

	return (
		<TableContainer>
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