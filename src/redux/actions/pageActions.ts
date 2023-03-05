import { SET_MONTH, SET_PAGE, SET_YEAR } from './types'

export const setMonth = (month: any) => (dispatch: any) => {
    dispatch({
        type: SET_MONTH,
        payload: month
    })
}

export const setPage = (page: any) => (dispatch: any) => {
    dispatch({
        type: SET_PAGE,
        payload: page
    })
}

export const setYear = (year: any) => (dispatch: any) => {
    dispatch({
        type: SET_YEAR,
        payload: year
    })
}