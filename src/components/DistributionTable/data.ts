import { Activity } from '../../api/types'
import { getLabels } from './labels'

export const getChartData = (data: any, xMin: number, xMax: number) => {
    const chartData = {
        labels: getLabels(xMin, xMax),
        datasets: getDataSets(data, xMin, xMax, false)
    }
    const chartDataWithNames = {
        labels: getLabels(xMin, xMax),
        datasets: getDataSets(data, xMin, xMax, true)
    }
    return [
        chartData,
        chartDataWithNames
    ]
}

const getDataSets = (data: any, xMin: number, xMax: number, withNames: boolean) => [{
    label: 'abc',
    data: transformData(data, xMin, xMax, withNames),
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
    categorySpacing: 0
    //barThickness: 5,
    //barValueSpacing: 3,
    //barDatasetSpacing: 2,
    //categoryPercentage: 0.5,
    //barPercentage: 1.0,
}]

const transformData = (data: any, xMin: number, xMax: number, withNames: boolean) => Object.keys(data)
    .reduce((acc: any, curr: any) => ([...acc, ...data[curr].activities]), [])
    .filter((activity: Activity) => activity.distance >= xMin && activity.distance <= xMax)
    .map((activity: Activity) => ({
            ...activity,
            distance: activity.distance.toFixed(2)
        }
    ))
    .reduce((acc: any, activity: Activity) => withNames ? milesToActivity(acc, activity) : milesToActivityWithNames(acc, activity), {})

const milesToActivity = (acc: any, activity: Activity) => ({
    ...acc,
    ...acc[activity.distance] ? {
        [activity.distance]: [...acc[activity.distance], activity]
    } : {
        [activity.distance]: [activity]
    }
})
const milesToActivityWithNames = (acc: any, activity: Activity) => ({
    ...acc,
    ...acc[activity.distance] ? {
        [activity.distance]: acc[activity.distance] + 1
    } : {
        [activity.distance]: 1
    }
})