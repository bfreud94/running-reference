export const meterToMile = (meter: number) => (meter / 1609.34).toFixed(2)

export const numberToMonthMap = {
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

export const formatDate = (dateString: string) => new Date(dateString).toDateString().substring(4)

export const getCurrentPage = (month: string = '', year: string = '') => {
    if (year && month) {
        return 'month'
    } else if (year) {
        return 'year'
    } else {
        return 'home'
    }
}