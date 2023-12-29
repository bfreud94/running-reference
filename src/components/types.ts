import { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react'
import { Activity, ActivitiesApiDocument, Totals } from '../api/types'
import { NavigateFunction, Params, RouteObject } from 'react-router-dom'

export enum Page {
	HOME = 'home',
	MONTH = 'month',
	YEAR = 'year'
}

export interface TableProviderProps {
	children: ReactElement | null
}

export type Month = {
    activities: Activity[]
    totals: Totals
}

export type CurrentDataType = HomeDataType | YearDataType

export type CurrentTotalsType = Totals

// fix this type
export type HomeDataType = Omit<ActivitiesApiDocument, 'totals'> | object

type HomeTotalsType = Totals | object

export type YearDataType = {
	January?: Month
	Februrary?: Month
	March?: Month
	April?: Month
	May?: Month
	June?: Month
	July?: Month
	August?: Month
	September?: Month
	October?: Month
	November?: Month
	December?: Month
}

type YearTotalsType = Totals | object

/*
export type StateData = {
	currentData: CurrentDataType
	homeData: HomeDataType
	// monthData: {},
	yearlyData: YearDataType
}

export type StateTotals = {
	currentTotals: CurrentTotalsType,
	homeTotals: HomeTotalsType,
	// monthTotals: {},
	yearlyTotals: YearTotalsType
}
*/

export type StateDataAndTotals = {
	apiResponse: ActivitiesApiDocument
	currentData: CurrentDataType
	currentTotals: CurrentTotalsType
}

export type ChangePageFunctionType = (destination: Page, timeframe: string) => void

export interface TableContextType {
	currentPage: Page
	changePage?: ChangePageFunctionType
	data: StateDataAndTotals
	headers: Array<string>
	isLoading: boolean
	setCurrentPage?: Dispatch<SetStateAction<{}>>
	setHomeDataAndTotals?: Dispatch<SetStateAction<{}>>
	setMonthDataAndTotals?: Dispatch<SetStateAction<{}>>
	setYearlyDataAndTotals?: Dispatch<SetStateAction<{}>>

}

export type GetDataAndTotals = {
	data: HomeDataType | YearDataType
	keys: {
		dataKey: string
		totalsKey: string
	}
	totals: HomeTotalsType | YearTotalsType
}