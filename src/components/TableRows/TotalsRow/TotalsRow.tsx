import React, { FC } from 'react'
import { 
	TableCell,
	TableRow
} from '@mui/material'
import {
	getAverageHeartRateForMonth,
	getAverageHeartRateForYear,
	getAveragePace,
	getFormattedTime,
	getTotalAverageHeartRate,
	getTotalTimeForYear,
	getYearlyData,
	roundNumber,
} from '../../../functions'
import { useTableState } from '../../../hooks'
import { CurrentDataType, CurrentTotalsType, HomeDataType, MonthDataType, Page, YearDataType } from '../../types'
import { getAllActivities } from './functions'
import { TotalsRowProps } from './TotalsRow.types'
import { Activity } from '../../../api/types'
import { START_YEAR } from '../../../api/constants'

const getTimeSpecificTableCells = (currentPage: Page, currentData: CurrentDataType) => {
	let tableCells = <></>
	if (currentPage === Page.YEAR) {
		const activities = getAllActivities(currentData, currentPage)
		tableCells = (
			<>
				<TableCell>{getAverageHeartRateForYear(currentData)}</TableCell>
				<TableCell>{getTotalTimeForYear(currentData)}</TableCell>
				<TableCell>{getAveragePace(activities)}</TableCell>
			</>
		)
	} else if (currentPage === Page.MONTH) {
		currentData = currentData as MonthDataType
		tableCells = (
			<>
				<TableCell>{getAverageHeartRateForMonth(currentData)}</TableCell>
				<TableCell>{getFormattedTime(currentData)}</TableCell>
				<TableCell>{getAveragePace(currentData)}</TableCell>
			</>
		)
	} else if (currentPage === Page.HOME) {
		currentData = currentData as HomeDataType
		const activities = getAllActivities(currentData, currentPage)
		tableCells = (
			<>
				<TableCell>{getTotalAverageHeartRate(currentData)}</TableCell>
				<TableCell>{getTotalTimeForYear(currentData)}</TableCell>
				<TableCell>{getAveragePace(activities)}</TableCell>
			</>
		)
	}
	return tableCells
}

const TotalsRow: FC<TotalsRowProps> = ({
	tableData
}) => {
	const { currentPage, data } = useTableState()
	let correctTotals: CurrentTotalsType = data.currentTotals
	if (Object.keys(data.currentData).includes(START_YEAR) && currentPage === Page.MONTH && data.currentData) {
		correctTotals = (tableData as MonthDataType).reduce((accumulator: CurrentTotalsType, currentActivity: Activity): CurrentTotalsType => {
			return {
				activities: accumulator.activities + 1,
				distance: accumulator.distance + currentActivity.distance
			}
		}, {
			activities: 0,
			distance: 0
		})
	} else if (Object.keys(data.currentData).includes(START_YEAR) && currentPage === Page.YEAR && data.currentData) {
		const [year] = window.location.pathname.split('/').filter(Boolean)
		const yearlyData = getYearlyData(data.currentData[year as keyof CurrentDataType])
		correctTotals = Object.keys(yearlyData).reduce((accumulator: CurrentTotalsType, currentYear: string): CurrentTotalsType => {
			const monthData = yearlyData[currentYear as keyof YearDataType]
			return {
				activities: accumulator.activities + monthData.totals.activities,
				distance: accumulator.distance + monthData.totals.distance
			}
		}, {
			activities: 0,
			distance: 0
		})
	}
	return (
		<TableRow>
			<TableCell>Totals</TableCell>
			<TableCell>{correctTotals.activities}</TableCell>
			{getTimeSpecificTableCells(currentPage, tableData)}
			<TableCell>{roundNumber(correctTotals.distance, 2)}</TableCell>
		</TableRow>
	)
}

export default TotalsRow