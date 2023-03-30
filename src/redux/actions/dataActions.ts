import { Dispatch } from 'redux'
import { GET_DATA, SET_MONTHLY_DATA, SET_SORTED_KEYS, SET_YEARLY_DATA, UPDATE_DATA } from './types'

export const getData = () => async (dispatch: Dispatch) => {
    const data = await (await fetch('http://localhost:8000/api/yearlyRuns')).json()
    dispatch({
        type: GET_DATA,
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