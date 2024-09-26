import React, { FC } from 'react'
import { TableCell } from '@mui/material'
import { formatDate, getNextPage } from '../../../functions'
import { useTableState } from '../../../hooks'
import { MonthDataType, Page } from '../../types'
import styles from './LeftMostRow.styles'
import { LeftMostRowProps } from './LeftMostRow.types'

const LeftMostRow: FC<LeftMostRowProps> = ({
	timeframe,
	tableData
}) => {
	const { changePage, currentPage } = useTableState()
	const destinationPage = getNextPage(currentPage)
	if (currentPage === Page.MONTH) {
		const monthData = tableData as MonthDataType
		const index = parseFloat(timeframe)
		return <TableCell style={styles.leftMostCell}>{formatDate(monthData[index].start_date)}</TableCell>
	}
	return (
		<TableCell style={styles.leftMostCell} onClick={() => changePage(destinationPage, timeframe)}>{timeframe}</TableCell>
	)
}

export default LeftMostRow