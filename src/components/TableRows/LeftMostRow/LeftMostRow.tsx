import React, { FC } from 'react'
import { TableCell } from '@mui/material'
import { useTableState } from '../../hooks'
import { formatDate, getNextPage } from '../../../functions'
import { Page } from '../../types'
import styles from './LeftMostRow.styles'

interface LeftMostRowProps {
	timeframe: string
}

const LeftMostRow: FC<LeftMostRowProps> = ({
	timeframe
}) => {
	const { changePage, currentPage, data } = useTableState()
	const currentData = data.currentData
	const destinationPage = getNextPage(currentPage)
	return currentPage === Page.MONTH ? (
		<TableCell>{formatDate(currentData[timeframe].start_date)}</TableCell>
	) : (
		<TableCell style={styles.leftMostCell} onClick={() => changePage(destinationPage, timeframe)}>{timeframe}</TableCell>
	)
}

export default LeftMostRow