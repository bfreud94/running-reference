export const state = {
    columns: ['Total Activities', 'Total Distance'],
    month: '',
    page: 'home',
    year: ''
}

export const tableModeMap = {
    months: {
        firstColumnn: 'Month'
    },
    years: {
        firstColumn: 'Year'
    }
}

export const setState = (stateArgs: any) => Object.keys(stateArgs)
    .forEach((arg: any) => state[arg] = stateArgs[arg])

export const setColumns = (month: string, year: string) => {
    if (month && year) {
        return ['Date', 'Name', 'Distance']
    }
    const columns = ['Total Activities', 'Total Distance']
    const firstColumn = year ? tableModeMap.months.firstColumnn : tableModeMap.years.firstColumn
    columns.unshift(firstColumn)
    setState({ columns })
}