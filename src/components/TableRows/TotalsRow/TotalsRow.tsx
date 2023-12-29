import React from 'react'
import { 
	TableCell,
	TableRow
} from '@mui/material'
import { useTableState } from '../../hooks'

const TotalsRow = () => {
	const { data } = useTableState()
	const currentTotals = data.currentTotals
	return (
		<TableRow>
			<TableCell>Totals</TableCell>
			<TableCell>{currentTotals.activities}</TableCell>
			<TableCell>{currentTotals.distance}</TableCell>
		</TableRow>
	)
}

export default TotalsRow