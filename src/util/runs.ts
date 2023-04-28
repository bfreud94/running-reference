import { numberToMonthMap } from '../util/calendar'
import { Activity, Month } from '../api/types'

export const getRunsInAYear = (yearData: any) => (
    Object.keys(numberToMonthMap).map(number => {
        const monthlyRuns = yearData.activities
            .reverse()
            .filter(({ start_date }) => new Date(start_date).getMonth() + 1 === parseInt(number))
        return {
            [numberToMonthMap[number]]: {
                activities: monthlyRuns,
                totals: {
                    activities: monthlyRuns.length,
                    distance: monthlyRuns.reduce((acc: number, curr: Activity) => acc + curr.distance, 0)
                }
            }
        }
    }).reduce((accumulator: any, currentValue: Record<string, Month>) => ({
        ...accumulator,
        ...currentValue
    }), {})
)

export const getRunsInAMonth = (data: any, year: string, month: string) => getRunsInAYear(data[year])[month]