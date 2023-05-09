import { CSSProperties } from 'react'
import { SetMonthAction, SetMonthlyDataAction, SetYearAction, SetYearlyDataAction } from '../../../redux/types'

export interface ArrowProps extends ArrowConnectedProps {
    isLeft: boolean
}

interface ArrowConnectedProps {
    homeData: any
    month: string
    setMonth: SetMonthAction
    setMonthlyData: SetMonthlyDataAction
    setYear: SetYearAction
    setYearlyData: SetYearlyDataAction
    year: string
}

export interface ArrowStyles {
    arrow: CSSProperties
}