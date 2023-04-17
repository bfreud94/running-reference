import { Dispatch } from 'redux'
import { SET_INITIAL_DATA, SET_MONTHLY_DATA, SET_SORTED_KEYS, SET_YEARLY_DATA, UPDATE_DATA } from './types'

export const setInitialData = (data: any) => async (dispatch: Dispatch) => {
    dispatch({
        type: SET_INITIAL_DATA,
        payload: data
    })
}

export const setMonthlyData = (data: any) => (dispatch: Dispatch) => {
    dispatch({
        type: SET_MONTHLY_DATA,
        payload: data
    })
}

export const setYearlyData = (data: any) => (dispatch: Dispatch) => {
    dispatch({
        type: SET_YEARLY_DATA,
        payload: data
    })
}

export const updateData = (page: string) => (dispatch: Dispatch) => {
    dispatch({
        type: UPDATE_DATA,
        payload: page
    })
}

export const setSortedKeys = (key: string, keys: any) => (dispatch: Dispatch) => {
    dispatch({
        type: SET_SORTED_KEYS,
        payload: {
            key,
            keys
        }
    })
}