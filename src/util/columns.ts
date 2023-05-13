import { tableModeMap } from '../state'

export const getColumns = (month: string, year: string): string[] => {
    let columns = []
    if (month && year) {
        columns.push(...[
            'Date',
            'Name',
            'Heart Rate',
            'Cadence',
            'Relative Effort',
            'Distance'
        ])
        if (month) {
            columns.splice(2, 0, 'Average Pace')
            columns.splice(3, 0, 'Total Time')
        }
        return columns
    }
    columns.push(...[
        'Total Activities',
        'Total Distance'
    ])
    const firstColumn = year ? tableModeMap.months.firstColumnn : tableModeMap.years.firstColumn
    columns.unshift(firstColumn)
    return columns
}