export interface TablePropTypes extends TableConnectedPropTypes {
    columns: string[]
}

interface TableConnectedPropTypes {
    data: any
    year: string
}