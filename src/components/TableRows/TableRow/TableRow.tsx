import React, { FC } from 'react'
import { 
	TableCell,
	TableRow as MuiTableRow
} from '@mui/material'
import LeftMostRow from '../LeftMostRow/LeftMostRow'
import { getActivitiesAndDistance, getAllActivities, openActivity } from './functions'
import { useTableState } from '../../../hooks'
import { getAverageHeartRateForHome, getAverageHeartRateForYear, getAveragePace, getFormattedTime, getHeartRateForRun, roundNumber, secondsToTime } from '../../../functions'
import { Activity } from '../../../api/types'
import { CurrentDataType, HomeDataType, Page, YearDataType } from '../../types'
import { TableRowProps } from './TableRow.types'

const getTimeSpecificTableCells = (activity: Activity, currentPage: Page, data: CurrentDataType, timeframe: string) => {
	let tableCells = <></>
	if (currentPage === Page.YEAR) {
		data = data as YearDataType
		const key = timeframe as unknown as keyof YearDataType
		const activities = getAllActivities(data, currentPage, timeframe)
		tableCells = (
			<>
				<TableCell>{getAverageHeartRateForYear(data, key)}</TableCell>
				<TableCell>{getFormattedTime(data[key].activities)}</TableCell>
				<TableCell>{getAveragePace(activities)}</TableCell>
			</>
		)
	} else if (currentPage === Page.MONTH) {
		tableCells = (
			<>
				<TableCell>{getHeartRateForRun(activity)}</TableCell>
				<TableCell>{secondsToTime(activity.moving_time || 0)}</TableCell>
				<TableCell>{getAveragePace([activity])}</TableCell>
			</>
		)
	} else if (currentPage === Page.HOME) {
		data = data as HomeDataType
		const activities = getAllActivities(data, currentPage, timeframe)
		tableCells = (
			<>
				<TableCell>{getAverageHeartRateForHome(data, timeframe)}</TableCell>
				<TableCell>{getFormattedTime(data[timeframe as unknown as keyof HomeDataType].activities)}</TableCell>
				<TableCell>{getAveragePace(activities)}</TableCell>
			</>
		)
	}
	return tableCells
}

const TableRow: FC<TableRowProps> = ({
	timeframe,
	tableData
}) => {
	const { currentPage } = useTableState()
	const { activity, totalActivities, distance } = getActivitiesAndDistance(tableData, currentPage, timeframe)
	return (
		<MuiTableRow onClick={() => openActivity(activity, currentPage)}>
			<LeftMostRow tableData={tableData} timeframe={timeframe} />
			<TableCell>{currentPage === Page.MONTH ? activity.name : totalActivities}</TableCell>
			{getTimeSpecificTableCells(activity, currentPage, tableData, timeframe)}
			<TableCell>{roundNumber(distance, 2)}</TableCell>
		</MuiTableRow>
	)
}

export default TableRow