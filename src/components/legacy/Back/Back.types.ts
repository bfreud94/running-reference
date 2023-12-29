import { CSSProperties } from 'react'
import { SetMonthAction, SetPageAction, SetYearAction, UpdateDataAction } from '../../redux/types'

export interface BackPropTypes extends BackConnectedPropTypes {
    year: string
}

interface BackConnectedPropTypes {
    page: string
    setMonth: SetMonthAction
    setPage: SetPageAction
    setYear: SetYearAction
    updateData: UpdateDataAction
}

export interface BackStyleTypes {
    backArrow: CSSProperties
}