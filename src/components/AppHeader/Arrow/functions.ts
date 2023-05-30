import { NavigateFunction } from 'react-router-dom'
import { getRunsInAMonth, getRunsInAYear } from '../../../util/runs'
import { getFirstAndLastYears } from '../../../functions'
import { getNextMonthAndYear } from '../../../util/calendar'
import { SetMonthAction, SetMonthlyDataAction, SetYearAction, SetYearlyDataAction } from '../../../redux/types'

const getYear = (isLeft: boolean, year: string) => (isLeft ? parseInt(year) - 1 : parseInt(year) + 1).toString()

export const onArrowClick = (homeData: any, isLeft: boolean, month: string, navigate: NavigateFunction, setMonth: SetMonthAction, setMonthlyData: SetMonthlyDataAction, setYear: SetYearAction, setYearlyData: SetYearlyDataAction, year: string) => {
    const [firstYear, lastYear] = getFirstAndLastYears(homeData)
    if (month) {
        const now = new Date()
        const escape = (isLeft && year === firstYear && month === 'January') || (!isLeft && year === now.getFullYear().toString() && month === 'December')
        if (!escape) {
            const [newMonth, newYear] = getNextMonthAndYear(isLeft, month, year)
            const monthlyRuns = getRunsInAMonth(homeData, newYear, newMonth)
            setMonth(newMonth)
            if (newYear !== year) {
                setYear(newYear)
            }
            setMonthlyData(monthlyRuns)
            navigate(`/${newYear}/${newMonth}`)
        }
    } else {
        const escape = (isLeft && year === firstYear) || (!isLeft && year === lastYear)
        if (!escape) {
            const newYear = getYear(isLeft, year)
            const yearlyRuns = getRunsInAYear(homeData[newYear])
            setYear(newYear)
            setYearlyData(yearlyRuns)
            navigate(newYear)
        }
    }
}