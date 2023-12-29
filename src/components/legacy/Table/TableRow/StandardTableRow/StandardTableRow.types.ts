import { SetMonthAction, SetMonthlyDataAction, SetPageAction, SetYearAction, SetYearlyDataAction } from '../../../../redux/types'

export interface StandardTableRowPropTypes extends StandardTableRowConnectedPropTypes {
    time: string
}

interface StandardTableRowConnectedPropTypes {
    data: any
    homeData: any
    page: string
    setMonth: SetMonthAction
    setMonthlyData: SetMonthlyDataAction
    setPage: SetPageAction
    setYear: SetYearAction
    setYearlyData: SetYearlyDataAction
    year: string
}