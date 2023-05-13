import { Activity } from '../api/types'
import { formatPace } from './formatter'

const getAnyActivityTotal = (activities: Activity[], key: any, startingValue: any) => activities
    .reduce((acc: number, curr: Activity) => acc + curr[key], startingValue)

const getAnyActivityRatioToTotal = (activity: Activity, key: any, total: any) => activity[key] / total

const getTimeInUnitsFromString = (time: string): number[] => [
    parseFloat(time.substring(0, 2)),
    parseFloat(time.substring(3, 5)),
    parseFloat(time.substring(6, 8))
]

const getTotalTimeInSeconds = (hours: number, minutes: number, seconds: number): number => (hours * 60 * 60) + (minutes * 60) + seconds

const anyAverageConfig = (activities: Activity[], key: any) => ({
    apiToStringCase: {
        average_cadence: 'cadence',
        average_heartrate: 'heartRate',
        suffer_score: 'relativeEffort'
    },
    zeroCase: {
        cadence: 0,
        relativeEffort: 0,
        heartRate: 0
    },
    ...(activities.length && {
        oneCase: {
            cadence: activities[0][key],
            relativeEffort: activities[0][key],
            heartRate: activities[0][key]
        }
    }),
    totalMultipliers: {
        cadence: 2,
        relativeEffort: 1,
        heartRate: 1
    }
})

export const getAnyAverage = (activities: Activity[], key: any) => {
    const config = anyAverageConfig(activities, key)
    const transposedKey = config.apiToStringCase[key]
    const zeroCase = config.zeroCase[transposedKey]
    if (activities.length === 0 || !activities[0][key]) {
        return zeroCase
    }
    if (activities.length === 1) {
        const oneCase = config.oneCase[transposedKey]
        return oneCase * config.totalMultipliers[transposedKey]
    }

    let totalTime: string = getTotalTime(activities)

    if (totalTime.length === 5) {
        totalTime = '0:' + totalTime
    }

    const total = getAnyActivityTotal(activities, key, 0) / config.totalMultipliers[transposedKey]

    return activities
        .reduce((acc: number, curr: Activity) => acc + curr[key] * getAnyActivityRatioToTotal(curr, key, total), 0)
        .toFixed(1)
}

export const getAveragePace = (activities: Activity[]) => {
    if (activities.length === 0) {
        return '0:00'
    }
    if (activities.length === 1) {
        return formatPace(activities[0].average_speed)
    }

    let distance: any = activities.reduce((acc: any, curr: Activity) => acc + curr.distance, 0)

    let totalTime: string = getTotalTime(activities)

    if (totalTime.length === 5) {
        totalTime = '0:' + totalTime
    }
    
    let [hours, minutes, seconds] = getTimeInUnitsFromString(totalTime)

    let timeElapsed: number = getTotalTimeInSeconds(hours, minutes, seconds)
    let calculatedPace: number = Math.floor(timeElapsed / distance)

    let paceMinutes: number = Math.floor(calculatedPace / 60)
    let paceSeconds: any = calculatedPace - (paceMinutes * 60)

    if (paceSeconds < 10) {
        paceSeconds = '0' + paceSeconds
    }
    
    return paceMinutes + ':' + paceSeconds
}

export const getTotalTime = (activities: Activity[]): string => new Date(activities
    .reduce((acc: any, curr: Activity) => acc + curr.moving_time, 0) * 1000)
    .toISOString()
    .slice(11, 19)