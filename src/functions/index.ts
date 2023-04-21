import { SetMonthAction, SetPageAction, SetYearAction } from '../redux/types'
import { numberToMonthMap } from '../util/calendar'
import { Activity, Month } from '../api/types'
import { NavigateFunction } from 'react-router-dom'

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

const tableRowNavigateLocation = (rowText: string, time: string, year: string) => /^\d+$/.test(rowText) ? `/${time}` : `/${year}/${time}`

export const yearColumnClick = (
    e: any,
    data: any,
    navigate: NavigateFunction,
    page: string,
    setMonth: SetMonthAction,
    setMonthlyData: any,
    setPage: SetPageAction,
    setYear: SetYearAction,
    setYearlyData: any,
    time: string,
    year: string
) => {
    if (page !== 'month') {
        const toLocation = tableRowNavigateLocation(e.currentTarget.firstChild.textContent, time, year)
        navigate(toLocation)
        if (page === 'year') {
            setPage('month')
            setMonth(time)
            const monthlyRuns = getRunsInAMonth(data, year, time)
            setMonthlyData(monthlyRuns)
        } else if (page === 'home') {
            setPage('year')
            setYear(time)
            const yearlyRuns = getRunsInAYear(data[time])
            setYearlyData(yearlyRuns)
        }
    }
}

export const getPace = (average_speed: number) => {
    const pace = 1609.34 / (60 * average_speed)
    let minutes = Math.floor(pace)
    let seconds = Math.round((pace - minutes) * 60)
    if (seconds === 60) {
        minutes += 1
        seconds = 0
    }
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}