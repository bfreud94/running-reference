export interface StandardTableRowPropTypes extends StandardTableRowConnectedPropTypes {
    time: any
}

interface StandardTableRowConnectedPropTypes {
    data: any
    homeData: any
    page: {
        month: string
        page: string
        year: string
    }
    setMonth: (month: string) => void
    setMonthlyData: (month: string) => void
    setPage: (page: string) => void
    setYear: (year: string) => void
    setYearlyData: (year: string) => void
}