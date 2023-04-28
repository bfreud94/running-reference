export const getTotal = (data: any, homeDataTotals: any, key: string, page: string) => {
    if (page === 'home') {
        return homeDataTotals[key]
    } else if (page === 'year') {
        const total = Object.keys(data).reduce(((accumulator: number, currentValue: any) =>
            accumulator += parseFloat(data[currentValue].totals[key])
        ), 0)
        return key === 'activities' ? total : total.toFixed(2)
    } else if (page === 'month') {
        return key === 'distance' ? data.totals[key].toFixed(2) : data.totals[key]
    }
    return 0
}