import { tableModeMap } from '../state'

export const getColumns = (month: string, year: string): string[] => {
    if (month && year) {
        return ['Date', 'Name', 'Distance']
    }
    const columns = ['Total Activities', 'Total Distance']
    const firstColumn = year ? tableModeMap.months.firstColumnn : tableModeMap.years.firstColumn
    columns.unshift(firstColumn)
    return columns
}