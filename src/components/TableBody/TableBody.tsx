import React, { FC } from 'react'
import {
	TableBody as MuiTableBody
} from '@mui/material'
import TotalsRow from '../TableRows/TotalsRow/TotalsRow'
import TableRow from '../TableRows/TableRow/TableRow'
import { getTableData } from './functions'
import { useTableState } from '../../hooks'

const TableBody: FC = () => {
	const { currentPage, data } = useTableState()
	const tableData = getTableData(data.currentData, currentPage)
	return (
		<MuiTableBody>
			{Object.keys(tableData).map((timeframe: string) => (
				<TableRow key={timeframe} timeframe={timeframe} />
			))}
			<TotalsRow />
		</MuiTableBody>
	)
}

export default TableBody