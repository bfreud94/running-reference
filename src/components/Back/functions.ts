const getNavLocation = (page: string, year: any) => {
    if (page === 'month') {
        return `/${year}`
    } else {
        return `/`
    }
}

const setAppComponentState = (page: any, setMonth: any, setPage: any, setYear: any, updateData: any) => {
    if (page === 'year') {
        setYear(null)
        setPage('home')
    } else {
        setMonth(null)
        setPage('year')
    }
    updateData(page)
}

export const onBackClick = (navigate: any, page: any, setMonth: any, setPage: any, setYear: any, updateData: any, year: any) => {
    setAppComponentState(page, setMonth, setPage, setYear, updateData)
    const navLocation = getNavLocation(page, year)
    navigate(navLocation)
}