import { SetMonthAction, SetPageAction, SetYearAction } from '../../../../redux/types'

export interface StandardTableRowPropTypes extends StandardTableRowConnectedPropTypes {
    time: string
}

interface StandardTableRowConnectedPropTypes {
    data: any
    homedata: any
    page: string
    setMonth: SetMonthAction
    setMonthlyData: (month: string) => void
    setPage: SetPageAction
    setYear: SetYearAction
    setYearlyData: (year: string) => void
    year: string
}