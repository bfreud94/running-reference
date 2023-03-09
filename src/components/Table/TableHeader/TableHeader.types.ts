export interface TableHeaderPropTypes extends TableHeaderConnectedPropTypes {
    columns: any
}

interface TableHeaderConnectedPropTypes {
    data: any
    page: any
    setSortedKeys: any
    sortOrder: any
}