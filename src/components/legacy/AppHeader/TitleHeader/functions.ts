export const getTitleHeader = (month: string, year: string) => {
    let titleHeader: string = ''
    if (!month && !year) {
        titleHeader += 'All Activities'
    } else {
        if (month) {
            titleHeader += month
        }
        if (year) {
            titleHeader += ' ' + year
        }
    }
    return titleHeader
}