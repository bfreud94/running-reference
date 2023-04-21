import { Activity } from '../../../api/types'
import { getPace } from '../../../functions'

export const getTotal = (data: any, homeDataTotals: any, key: string, page: string) => {
    if (page === 'home') {
        return homeDataTotals[key]
    } else if (page === 'year') {
        const total = Object.keys(data).reduce(((accumulator: number, currentValue: any) =>
            accumulator += parseFloat(data[currentValue].totals[key])
        ), 0)
        return key === 'activities' ? total : total.toFixed(2)
    } else if (page === 'month') {
        return key === 'distance' ? data.totals[key].toFixed(2) : data.totals[key]
    }
    return 0
}

export const getAveragePace = (activities: Activity[]) => {
    if (activities.length === 0) {
        return '0:00'
    }
    if (activities.length === 1) {
        return getPace(activities[0].average_speed)
    }

    let distance: any = activities.reduce((acc: any, curr: Activity) => acc + curr.distance, 0)

    let totalTime: string = getTotalTime(activities)

    if (totalTime.length === 5) {
        totalTime = '0:' + totalTime
    }
    
    let hours: any = parseFloat(totalTime.substring(0, 2))
    let minutes: any = parseFloat(totalTime.substring(3, 5))
    let seconds: any = parseFloat(totalTime.substring(6, 8))

    let timeElapsed: number = (hours * 60 * 60) + minutes * 60 + seconds
    let calculatedPace: number = Math.floor(timeElapsed / distance)

    let paceMinutes: number = Math.floor(calculatedPace / 60)
    let paceSeconds: any = calculatedPace - (paceMinutes * 60)

    if (paceSeconds < 10) {
        paceSeconds = '0' + paceSeconds
    }
    
    return paceMinutes + ':' + paceSeconds
}

export const getTotalTime = (activities: Activity[]) => {
    let time = new Date(activities
        .reduce((acc: any, curr: Activity) => acc + curr.moving_time, 0) * 1000)
        .toISOString()
        .slice(11, 19)
    return time
}