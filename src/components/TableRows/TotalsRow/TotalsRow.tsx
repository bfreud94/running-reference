import React, { FC } from 'react'
import { 
	TableCell,
	TableRow
} from '@mui/material'
import {
	getAverageHeartRateForMonth,
	getAverageHeartRateForYear,
	getTotalAverageHeartRate,
	getTotalTimeForYear,
	roundNumber,
	secondsToHoursMinutesSeconds
} from '../../../functions'
import { useTableState } from '../../../hooks'
import { CurrentDataType, HomeDataType, MonthDataType, Page } from '../../types'

const getTimeSpecificTableCells = (currentPage: Page, currentData: CurrentDataType) => {
	let tableCells = <></>
	if (currentPage === Page.YEAR) {
		tableCells = (
			<>
				<TableCell>{getAverageHeartRateForYear(currentData)}</TableCell>
				<TableCell>{getTotalTimeForYear(currentData)}</TableCell>
			</>
		)
	} else if (currentPage === Page.MONTH) {
		currentData = currentData as MonthDataType
		tableCells = (
			<>
				<TableCell>{getAverageHeartRateForMonth(currentData)}</TableCell>
				<TableCell>{secondsToHoursMinutesSeconds(currentData)}</TableCell>
			</>
		)
	} else if (currentPage === Page.HOME) {
		currentData = currentData as HomeDataType
		tableCells = (
			<>
				<TableCell>{getTotalAverageHeartRate(currentData)}</TableCell>
				<TableCell>{getTotalTimeForYear(currentData)}</TableCell>
			</>
		)
	}
	return tableCells
}

const TotalsRow: FC = () => {
	const { currentPage, data } = useTableState()
	const currentTotals = data.currentTotals
	return (
		<TableRow>
			<TableCell>Totals</TableCell>
			<TableCell>{currentTotals.activities}</TableCell>
			{getTimeSpecificTableCells(currentPage, data.currentData)}
			<TableCell>{roundNumber(currentTotals.distance, 2)}</TableCell>
		</TableRow>
	)
}

export default TotalsRow