import React, { FC } from 'react'
import { 
	TableCell,
	TableRow as MuiTableRow
} from '@mui/material'
import LeftMostRow from '../LeftMostRow/LeftMostRow'
import { getActivitiesAndDistance, openActivity } from './functions'
import { useTableState } from '../../../hooks'
import { getAverageHeartRateForHome, getAverageHeartRateForYear, getHeartRateForRun, roundNumber, secondsToHoursMinutesSeconds, secondsToTime } from '../../../functions'
import { Activity } from '../../../api/types'
import { CurrentDataType, HomeDataType, Page, YearDataType } from '../../types'
import { TableRowProps } from './TableRow.types'

const getTimeSpecificTableCells = (activity: Activity, currentPage: Page, data: CurrentDataType, timeframe: string) => {
	let tableCells = <></>
	if (currentPage === Page.YEAR) {
		data = data as YearDataType
		const key = timeframe as unknown as keyof YearDataType
		tableCells = (
			<>
				<TableCell>{getAverageHeartRateForYear(data, key)}</TableCell>
				<TableCell>{secondsToHoursMinutesSeconds(data[key].activities)}</TableCell>
			</>
		)
	} else if (currentPage === Page.MONTH) {
		tableCells = (
			<>
				<TableCell>{getHeartRateForRun(activity)}</TableCell>
				<TableCell>{secondsToTime(activity.moving_time || 0)}</TableCell>
			</>
		)
	} else if (currentPage === Page.HOME) {
		data = data as HomeDataType
		tableCells = (
			<>
				<TableCell>{getAverageHeartRateForHome(data, timeframe)}</TableCell>
				<TableCell>{secondsToHoursMinutesSeconds(data[timeframe as unknown as keyof HomeDataType].activities)}</TableCell>
			</>
		)
	}
	return tableCells
}

const TableRow: FC<TableRowProps> = ({
	timeframe
}) => {
	const { currentPage, data } = useTableState()
	const currentData = data.currentData
	const { activity, activities, distance } = getActivitiesAndDistance(currentData, currentPage, timeframe)
	return (
		<MuiTableRow onClick={() => openActivity(activity, currentPage)}>
			<LeftMostRow timeframe={timeframe} />
			<TableCell>{currentPage === Page.MONTH ? activity.name : activities}</TableCell>
			{getTimeSpecificTableCells(activity, currentPage, currentData, timeframe)}
			<TableCell>{roundNumber(distance, 2)}</TableCell>
		</MuiTableRow>
	)
}

export default TableRow