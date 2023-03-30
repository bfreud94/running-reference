import { Dispatch } from 'redux'
import { SET_MONTH, SET_PAGE, SET_YEAR } from './types'

export const setMonth = (month: string | null) => (dispatch: Dispatch) => {
    dispatch({
        type: SET_MONTH,
        payload: month
    })
}

export const setPage = (page: string) => (dispatch: Dispatch) => {
    dispatch({
        type: SET_PAGE,
        payload: page
    })
}

export const setYear = (year: string | null) => (dispatch: Dispatch) => {
    dispatch({
        type: SET_YEAR,
        payload: year
    })
}