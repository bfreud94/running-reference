import { Dispatch } from 'redux'
import store from '../store'

export type RootState = ReturnType<typeof store.getState>
export type SetMonthAction = (month: string | null) => Dispatch
export type SetYearAction = (month: string | null) => Dispatch
export type SetPageAction = (page: string) => Dispatch
export type UpdateDataAction = (page: string) => Dispatch