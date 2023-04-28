import { Activity } from '../../../../api/types'
import { formatTime } from '../../../../util/formatter'

export const getTime = (moving_time: number) => formatTime(new Date(moving_time * 1000).toISOString().slice(11, 19))

export const openStravaActivity = (id: string) => {
    const url = getActivityURL(id)
    window.open(url)
}

const getActivityURL = (id: string) => `https://www.strava.com/activities/${id}`

export const getAnyActivityProperty = (activity: Activity, key: any, defaultValue: any) => activity[key] || defaultValue