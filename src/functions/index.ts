import { meterToMile, numberToMonthMap } from '../util'

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
                    distance: meterToMile(monthlyRuns.reduce((acc: number, curr: any) => acc + curr.distance, 0))
                }
            }
        }
    }).reduce((accumulator: any, currentValue: any) => ({
        ...accumulator,
        ...currentValue
    }), {})
)

export const getRunsInAMonth = (data: any, year: any, month: any) => getRunsInAYear(data[year])[month]

const tableRowNavigateLocation = (rowText: string, time: string, year: string) => /^\d+$/.test(rowText) ? `/${time}` : `/${year}/${time}`

export const yearColumnClick = (
    e: any,
    data: any,
    navigate: any,
    page: any,
    setMonth: any,
    setMonthlyData: any,
    setPage: any,
    setYear: any,
    setYearlyData: any,
    time: any,
    year: any
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