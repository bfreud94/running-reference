import { Activity } from '../../../api/types'

export interface TableRowProps {
	timeframe: string
}

export type ActivitiesAndDistanceType = {
	activity: Activity
	activities: number
	distance: number
}