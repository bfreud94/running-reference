import React, { FC } from 'react'
import { TableCell } from '@mui/material'
import { formatDate, getNextPage } from '../../../functions'
import { useTableState } from '../../../hooks'
import { MonthDataType, Page } from '../../types'
import styles from './LeftMostRow.styles'
import { LeftMostRowProps } from './LeftMostRow.types'

const LeftMostRow: FC<LeftMostRowProps> = ({
	timeframe
}) => {
	const { changePage, currentPage, data } = useTableState()
	let currentData = data.currentData
	const destinationPage = getNextPage(currentPage)
	if (currentPage === Page.MONTH) {
		currentData = currentData as MonthDataType
		const index = parseFloat(timeframe)
		return <TableCell style={styles.leftMostCell}>{formatDate(currentData[index].start_date)}</TableCell>
	}
	return (
		<TableCell style={styles.leftMostCell} onClick={() => changePage(destinationPage, timeframe)}>{timeframe}</TableCell>
	)
}

export default LeftMostRow