import { SET_MONTH, SET_PAGE, SET_YEAR } from '../actions/types'

const initialState = {
    month: null,
    page: 'home',
    year: null
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case SET_MONTH:
            return {
                ...state,
                month: action.payload
            }
        case SET_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case SET_YEAR:
            return {
                ...state,
                year: action.payload
            }
        default:
            return state
    }
}