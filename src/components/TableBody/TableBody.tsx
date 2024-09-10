import React, { FC } from 'react'
import {
	TableBody as MuiTableBody
} from '@mui/material'
import TotalsRow from '../TableRows/TotalsRow/TotalsRow'
import TableRow from '../TableRows/TableRow/TableRow'
import { useTableState } from '../hooks'

const TableBody: FC = () => {
	const { data } = useTableState()
	const currentData = data.currentData
	// line 40: needs to be changed to year/month???
	// need to update types also...
	return (
		<MuiTableBody>
		{Object.keys(currentData).map((timeframe: string) => (
			<TableRow key={timeframe} timeframe={timeframe} />
		))}
		<TotalsRow />
	</MuiTableBody>
	)
}

export default TableBody