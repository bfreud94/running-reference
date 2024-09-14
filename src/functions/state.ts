import { Dispatch, SetStateAction } from 'react'
import { NavigateFunction, Params } from 'react-router-dom'
import { numberToMonthMap } from '../components/initialData'
import { ActivitiesApiDocument, Activity, YearActivities } from '../api/types'
import { CurrentDataType, HomeDataType, Month, MonthDataType, Page, StateDataAndTotals, YearDataType } from '../components/types'

export const getYearlyData = (yearData: YearActivities) => 
	Object.keys(numberToMonthMap).map((month: string) => {
        const monthlyRuns = yearData.activities
            .reverse()
            .filter(({ start_date }) => new Date(start_date).getMonth() + 1 === parseInt(month))
        return {
            [numberToMonthMap[month as unknown as keyof typeof numberToMonthMap]]: {
                activities: monthlyRuns,
                totals: {
                    activities: monthlyRuns.length,
                    distance: monthlyRuns.reduce((acc: number, curr: Activity) => acc + curr.distance, 0)
                }
            }
        }
    }).reduce((accumulator: YearDataType, currentValue: { [key: string]: Month }) => ({
        ...accumulator,
        ...currentValue
    }), {} as YearDataType)

export const changePageHelper = (
	destination: Page,
	data: StateDataAndTotals,
	navigate: NavigateFunction,
	queryParams: Params,
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
				currentData: getYearlyData(data.apiResponse[timeframe as unknown as keyof HomeDataType]),
				currentTotals: data.apiResponse[timeframe as unknown as keyof HomeDataType].totals
			})
			navigate(`/${timeframe}`)
			break
		case Page.MONTH:
			const isRefreshed = !data.currentData[timeframe as keyof CurrentDataType]
			const yearData = getYearlyData(data.apiResponse[queryParams.year as unknown as keyof HomeDataType])
			setData({
				...data,
				currentData: isRefreshed ? yearData[timeframe as keyof YearDataType].activities : (data.currentData as YearDataType)[timeframe as keyof YearDataType].activities,
				currentTotals: isRefreshed ? yearData[timeframe as keyof YearDataType].totals : (data.currentData as YearDataType)[timeframe as keyof YearDataType].totals
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

export const getHeaders = (page: Page): Array<string> => {
	switch (page) {
		case Page.HOME:
			return ['Years', 'Total Activities', 'Average Heart Rate', 'Total Time', 'Total Distance']
		case Page.YEAR:
			return ['Years', 'Total Activities', 'Average Heart Rate', 'Total Time', 'Total Distance']
		case Page.MONTH:
			return ['Date', 'Activity Name', 'Average Heart Rate', 'Time', 'Miles Run']
		default:
			return []
	}
}

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