import { getRuns } from '../api'

export const state = {
    columns: ['Total Activities', 'Total Distance'],
    month: '',
    page: 'home',
    year: ''
}

export const tableModeMap = {
    'years': {
        firstColumn: 'Year'
    },
    'months': {
        firstColumnn: 'Month'
    }
}

export const setState = (stateArgs: any) => Object.keys(stateArgs)
    .forEach((arg :any) => state[arg] = stateArgs[arg])

export const setInitialData = async (setData: any) => {
    const data = await getRuns()
    setData(data)
}

export const setColumns = (month: any, year: any) => {
    if (month && year) {
        return ['Date', 'Name', 'Distance']
    }
    const columns = ['Total Activities', 'Total Distance']
    const firstColumn = year ? tableModeMap.months.firstColumnn : tableModeMap.years.firstColumn
    columns.unshift(firstColumn)
    setState({ columns })
}