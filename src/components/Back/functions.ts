import { SetMonthAction, SetPageAction, SetYearAction, UpdateDataAction } from '../../redux/types'

const getNavLocation = (page: string, year: string) => page === 'month' ? `/${year}` : '/'

const setAppComponentState = (page: string, setMonth: SetMonthAction, setPage: SetPageAction, setYear: SetYearAction, updateData: UpdateDataAction) => {
    if (page === 'year') {
        setYear(null)
        setPage('home')
    } else {
        setMonth(null)
        setPage('year')
    }
    updateData(page)
}

export const onBackClick = (navigate: any, page: string, setMonth: SetMonthAction, setPage: SetPageAction, setYear: SetYearAction, updateData: UpdateDataAction, year: string) => {
    setAppComponentState(page, setMonth, setPage, setYear, updateData)
    const navLocation = getNavLocation(page, year)
    navigate(navLocation)
}