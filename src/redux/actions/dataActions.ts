import { GET_DATA, SET_MONTHLY_DATA, SET_YEARLY_DATA, UPDATE_DATA } from './types'

export const getData = () => async (dispatch: any) => {
    const data = await (await fetch('http://localhost:8000/api/yearlyRuns')).json()
    dispatch({
        type: GET_DATA,
        payload: data
    })
}

export const setMonthlyData = (data: any) => (dispatch: any) => {
    dispatch({
        type: SET_MONTHLY_DATA,
        payload: data
    })
}

export const setYearlyData = (data: any) => (dispatch: any) => {
    dispatch({
        type: SET_YEARLY_DATA,
        payload: data
    })
}

export const updateData = (page: any) => (dispatch: any) => {
    dispatch({
        type: UPDATE_DATA,
        payload: page
    })
}