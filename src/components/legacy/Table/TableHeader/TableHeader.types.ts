import { SetSortedKeysAction } from '../../../redux/types'

export interface TableHeaderPropTypes extends TableHeaderConnectedPropTypes {
    columns: string[]
}

interface TableHeaderConnectedPropTypes {
    data: any
    page: string
    prevSortColumn: string
    setSortedKeys: SetSortedKeysAction
    sortOrder: any
}