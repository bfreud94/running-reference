import React, { FC } from 'react'
import { 
	TableCell,
	TableRow as MuiTableRow
} from '@mui/material'
import LeftMostRow from '../LeftMostRow/LeftMostRow'
import { useTableState } from '../../hooks'
import { getActivitiesAndDistance } from './functions'
import { Page } from '../../types'
import { TableRowProps } from './TableRow.types'

const TableRow: FC<TableRowProps> = ({
	timeframe
}) => {
	const { currentPage, data } = useTableState()
	const currentData = data.currentData
	const { activity, activities, distance } = getActivitiesAndDistance(currentData, currentPage, timeframe)
	return (
		<MuiTableRow>
			<LeftMostRow timeframe={timeframe} />
			<TableCell>{currentPage === Page.MONTH ? activity : activities}</TableCell>
			<TableCell>{distance}</TableCell>
		</MuiTableRow>
	)
}

export default TableRow