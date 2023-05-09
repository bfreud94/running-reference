import { Dispatch } from 'redux'
import store from '../store'

export type RootState = ReturnType<typeof store.getState>
export type SetMonthAction = (month: string | null) => Dispatch
export type SetMonthlyDataAction = (data: any) => Dispatch
export type SetPageAction = (page: string) => Dispatch
export type SetSortedKeysAction = (columns: any, sortedKeys: any) => Dispatch
export type SetYearAction = (month: string | null) => Dispatch
export type SetYearlyDataAction = (data: any) => Dispatch
export type UpdateDataAction = (page: string) => Dispatch