import { Activity } from '../../api/types'
import { getLabels } from './labels'
import { meterToMile } from '../../util/formatter'

export const getChartData = (data: any) => ({
    labels: getLabels(),
    datasets: getDataSets(data)
})

const getDataSets = (data: any) => [{
    label: 'Idk where this is',
    data: transformData(data),
    //barThickness: 5,
    //barValueSpacing: 3,
    //barDatasetSpacing: 2,
    //categoryPercentage: 0.5,
    //barPercentage: 1.0,
    categorySpacing: 0,
    backgroundColor: 'rgba(53, 162, 235, 0.5)'
}]

const transformData = (data: any) => Object.keys(data)
    .reduce((acc: any, curr: any) => ( curr === '2010' ? [] : [...acc, ...data[curr].activities]), [])
    .map((activity: Activity) => meterToMile(activity.distance))
    .filter((curr: number) => curr >= 3 && curr <= 6)
    .reduce((acc: any, curr: number) => ({
        ...acc,
        ...acc[curr] ? {
            [curr]: acc[curr] + 1
        } : {
            [curr]: 1
        }
    }), {}
)