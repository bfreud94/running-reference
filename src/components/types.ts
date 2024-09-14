import { Dispatch, ReactElement, SetStateAction } from 'react'
import { Activity, ActivitiesApiDocument, Totals } from '../api/types'

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

export type MonthDataType = Activity[]

export type CurrentDataType = HomeDataType | YearDataType | MonthDataType

export type CurrentTotalsType = Totals

export type HomeDataType = Omit<ActivitiesApiDocument, 'totals'>

type HomeTotalsType = Totals

export type YearDataType = {
	January: Month
	Februrary: Month
	March: Month
	April: Month
	May: Month
	June: Month
	July: Month
	August: Month
	September: Month
	October: Month
	November: Month
	December: Month
}

type YearTotalsType = Totals

export type StateDataAndTotals = {
	apiResponse: ActivitiesApiDocument
	currentData: CurrentDataType
	currentTotals: CurrentTotalsType
}

export type ChangePageFunctionType = (destination: Page, timeframe: string) => void

export interface TableContextType {
	currentPage: Page
	changePage: ChangePageFunctionType
	data: StateDataAndTotals
	headers: Array<string>
	isLoading: boolean
	isRunning: boolean
	setCurrentPage?: Dispatch<SetStateAction<Page>>
	setHomeDataAndTotals?: Dispatch<SetStateAction<{}>>
	setMonthDataAndTotals?: Dispatch<SetStateAction<{}>>
	setYearlyDataAndTotals?: Dispatch<SetStateAction<{}>>
	setIsRunning: Dispatch<SetStateAction<boolean>>

}

export type GetDataAndTotals = {
	data: HomeDataType | YearDataType
	keys: {
		dataKey: string
		totalsKey: string
	}
	totals: HomeTotalsType | YearTotalsType
}