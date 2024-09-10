import { getDistance } from '../../../functions'
import { CurrentDataType, Page } from '../../types'
import { ActivitiesAndDistanceType } from './TableRow.types'

export const getActivitiesAndDistance = (currentData: CurrentDataType, page: Page, timeframe: string): ActivitiesAndDistanceType => {
	let activity = ''
	let activities = 0
	let distance = 0
	if (page === Page.HOME) {
		activities = currentData[timeframe].totals.activities
		distance = getDistance(currentData[timeframe].totals.distance)
	} else if (page === Page.MONTH) {
		activity = currentData[timeframe].name
		distance = currentData[timeframe].distance
	} else if (page === Page.YEAR) {
		activities = currentData[timeframe].totals.activities
		distance = getDistance(currentData[timeframe].totals.distance)
	}
	return {
		activity,
		activities,
		distance
	}
}