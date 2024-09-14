export const numberToMonthMap: { [key: number]: string } = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
}

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

export const getNextMonthAndYear = (isLeft: boolean, month: string, year: string) => {
    const now = new Date()
    now.setMonth(months.indexOf(month))
    const newMonth = numberToMonthMap[isLeft ? (
        new Date(now.getFullYear(), now.getMonth() - 1, 1).getMonth() + 1
    ) : (
        new Date(now.getFullYear(), now.getMonth() + 1, 1).getMonth() + 1   
    )]
    const newYear = isLeft ? (
        newMonth === 'December' ? (parseInt(year) - 1).toString() : year
    ) : (
        newMonth === 'January' ? (parseInt(year) + 1).toString() : year
    )
    return [newMonth, newYear]
}