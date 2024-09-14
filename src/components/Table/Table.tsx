import React, { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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

const Table: FC = () => {
	const { changePage, currentPage, data, isLoading, isRunning, setIsRunning } = useTableState()
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