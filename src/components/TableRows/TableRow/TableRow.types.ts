import { Activity } from '../../../api/types'
import { CurrentDataType } from '../../types'

export interface TableRowProps {
	timeframe: string
	tableData: CurrentDataType
}

export type ActivitiesAndDistanceType = {
	activity: Activity
	totalActivities: number
	distance: number
}