import { Activity } from '../../../api/types'

const columnNameMap = {
    Date: 'start_date',
    Distance: 'distance',
    Name: 'name',
    'Total Activities': 'activities',
    'Total Distance': 'distance'
}

const getMonthComparison = (a: any, b: any, column: string, isAscending: boolean) => {
    let comp: any = ''
    const aCurr: any = a[columnNameMap[column]]
    const bCurr: any = b[columnNameMap[column]]
    switch (typeof aCurr) {
        case 'number':
            comp = isAscending ? (
                aCurr - bCurr
            ) : bCurr - aCurr
            break
        case 'string':
            const isDate = !isNaN(new Date(aCurr).getTime())
            if (isDate) {
                comp = isAscending ? (
                    new Date(aCurr).getTime() - new Date(bCurr).getTime()
                ) : new Date(bCurr).getTime() - new Date(aCurr).getTime()
            } else {
                comp = isAscending ? (
                    aCurr.localeCompare(bCurr)
                ) : bCurr.localeCompare(aCurr)
            }
            break

    }
    return comp
}

export const sortData = (column: string, data: any, page: any, prevSortColumn: string, setSortedKeys: any, sortOrder: any) => {
    const isSameColumn = column === prevSortColumn
    if (page === 'month') {
        const sortedKeys = data.activities.sort((a: any, b: any) => {
            const ascending = getMonthComparison(a, b, column, true)
            const descending = getMonthComparison(a, b, column, false)
            const noOrder = a - b

            return sortOrder === 'NONE' || !isSameColumn ? descending : sortOrder === 'DSC' ? ascending : noOrder
        }).map((activity: Activity) => activity.id)
        setSortedKeys(column, sortedKeys)
    } else {
        const sortedKeys = Object.keys(data).sort((a: any, b: any) => {
            const ascending = data[a].totals[columnNameMap[column]] - data[b].totals[columnNameMap[column]]
            const descending = data[b].totals[columnNameMap[column]] - data[a].totals[columnNameMap[column]]
            const noOrder = a - b
    
            return sortOrder === 'NONE' || !isSameColumn ? descending : sortOrder === 'DSC' ? ascending : noOrder
        })
        setSortedKeys(column, sortedKeys)
    }
}

// data is either object.keys(data) or data.activities

export const microSort = (
    aFactor: any,
    bFactor: any,
    data: any,
    isSameColumn: boolean,
    sortOrder: string
) => data.sort((a: any, b: any) => {
    const ascending = aFactor - bFactor
    const descending = bFactor - aFactor

    const noOrder = a - b
    return sortOrder === 'NONE' || !isSameColumn ? descending : sortOrder === 'DSC' ? ascending : noOrder
})