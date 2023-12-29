import { SetMonthAction, SetMonthlyDataAction, SetPageAction, SetYearAction, SetYearlyDataAction } from '../redux/types'
import { NavigateFunction } from 'react-router-dom'
import { getRunsInAMonth, getRunsInAYear } from '../util/runs'

const tableRowNavigateLocation = (rowText: string, time: string, year: string) => /^\d+$/.test(rowText) ? `/${time}` : `/${year}/${time}`

export const getFirstAndLastYears = (data: any) => {
	const keys = Object.keys(data)
	return [keys[0], keys[keys.length - 1]]
}

export const yearColumnClick = (
	e: any,
	data: any,
	navigate: NavigateFunction,
	page: string,
	setMonth: SetMonthAction,
	setMonthlyData: SetMonthlyDataAction,
	setPage: SetPageAction,
	setYear: SetYearAction,
	setYearlyData: SetYearlyDataAction,
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