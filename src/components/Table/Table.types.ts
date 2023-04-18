export interface TablePropTypes extends TableConnectedPropTypes {
    columns: string[]
}

interface TableConnectedPropTypes {
    data: object
    year: string
}