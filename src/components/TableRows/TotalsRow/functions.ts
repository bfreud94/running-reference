import { Activity } from '../../../api/types'
import { CurrentDataType, HomeDataType, Page, YearDataType } from '../../types'

export const getAllActivities = (currentData: CurrentDataType, currentPage: Page): Activity[] => {
	let activities: Activity[] = []
	if (currentPage === Page.YEAR) {
		const data = currentData as YearDataType
		activities = Object.keys(data).reduce((acc: Activity[], month: string) => {
			acc.push(...data[month as keyof YearDataType].activities)
			return acc
		}, [])
	} else if (currentPage === Page.HOME) {
		const data = currentData as HomeDataType
		activities = Object.keys(data).reduce((acc: Activity[], timeframe: string) => {
			acc.push(...data[timeframe as unknown as keyof HomeDataType].activities)
			return acc
		}, [])
	}
	return activities
}