import { Activity } from '../../../api/types'
import { emptyActivity } from '../../initialData'
import { CurrentDataType, HomeDataType, MonthDataType, Page, YearDataType } from '../../types'
import { ActivitiesAndDistanceType } from './TableRow.types'

export const getActivitiesAndDistance = (currentData: CurrentDataType, page: Page, timeframe: string): ActivitiesAndDistanceType => {
	let activity = emptyActivity
	let activities = 0
	let distance = 0
	if (page === Page.HOME) {
		const data = currentData as HomeDataType
		const key = timeframe as unknown as keyof HomeDataType
		activities = data[key].totals.activities
		distance = data[key].totals.distance
	} else if (page === Page.MONTH) {
		const data = currentData as MonthDataType
		const index = parseFloat(timeframe)
		activity = data[index]
		distance = data[index].distance 
	} else if (page === Page.YEAR) {
		const data = currentData as YearDataType
		const key = timeframe as unknown as keyof YearDataType
		activities = data[key].totals.activities
		distance = data[key].totals.distance
	}
	return {
		activity,
		activities,
		distance
	}
}

export const openActivity = (activity: Activity, page: Page) => {
	if (page === Page.MONTH)  {
		const url = `https://www.strava.com/activities/${activity.id}`
		window.open(url, '_blank')
	}
}