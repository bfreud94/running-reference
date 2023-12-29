import { Dispatch, SetStateAction } from 'react'
import { numberToMonthMap } from '../components/initialData'
import { Activity, YearActivities } from '../api/types'
import { Month, Page, StateDataAndTotals, YearDataType } from '../components/types'
import { NavigateFunction, Params } from 'react-router-dom'

export const getYearlyData = (yearData: YearActivities) => 
	Object.keys(numberToMonthMap).map((month: string) => {
        const monthlyRuns = yearData.activities
            .reverse()
            .filter(({ start_date }) => new Date(start_date).getMonth() + 1 === parseInt(month))
        return {
            [numberToMonthMap[month]]: {
                activities: monthlyRuns,
                totals: {
                    activities: monthlyRuns.length,
                    distance: monthlyRuns.reduce((acc: number, curr: Activity) => acc + curr.distance, 0)
                }
            }
        }
    }).reduce((accumulator: YearDataType, currentValue: Month) => ({
        ...accumulator,
        ...currentValue
    }), {})

export const changePageHelper = (
	destination: Page,
	data: StateDataAndTotals,
	navigate: NavigateFunction,
	queryParams: any,
	setData: Dispatch<SetStateAction<StateDataAndTotals>>,
	setCurrentPage: Dispatch<SetStateAction<Page>>,
	timeframe: string
) => {
	setCurrentPage(destination)

	switch (destination) {
		case Page.HOME:
			const { totals, ...apiResponse } = data.apiResponse
			setData({
				...data,
				currentData: apiResponse,
				currentTotals: totals
			})
			navigate('/')
			break 
		case Page.YEAR:
			setData({
				...data,
				currentData: getYearlyData(data.apiResponse[timeframe]),
				currentTotals: data.apiResponse[timeframe].totals
			})
			navigate(`/${timeframe}`)
			break
		case Page.MONTH:
			const isRefreshed = !data.currentData[timeframe]
			const yearData = getYearlyData(data.apiResponse[queryParams.year])
			setData({
				...data,
				currentData: isRefreshed ? yearData[timeframe].activities : data.currentData[timeframe].activities,
				currentTotals: isRefreshed ? yearData[timeframe].totals : data.currentData[timeframe].totals
			})
			navigate(`/${queryParams.year}/${timeframe}`)
			break
	}
}


export const getTimeframe = (currentPage: Page, isGoingBack: boolean, queryParams: Params) => {
	if (isGoingBack) {
		return currentPage === Page.MONTH ? queryParams.year : ''
	} else {
		return queryParams.month ? queryParams.month : queryParams.year
	}
}

export const getHeaders = (page: Page): Array<string> => page === Page.MONTH ? (
	['Date', 'Activity Name', 'Miles Run']
) : ['Years', 'Total Activities', 'Total Distance']

export const getNextPage = (page: Page) => {
	let nextPage = Page.HOME
	switch (page) {
		case Page.HOME: {
			nextPage = Page.YEAR
			break
		}
		case Page.YEAR: {
			nextPage = Page.MONTH
			break
		}
	}
	return nextPage
}

export const getPreviousPage = (page: Page) => {
	let previousPage = Page.HOME
	switch (page) {
		case Page.YEAR: {
			previousPage = Page.HOME
			break
		}
		case Page.MONTH: {
			previousPage = Page.YEAR
			break
		}
	}
	return previousPage
}