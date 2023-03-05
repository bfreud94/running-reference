import { GET_DATA, SET_MONTHLY_DATA, SET_YEARLY_DATA, UPDATE_DATA } from '../actions/types'

const initialState = {
    currentData: null,
    homeData: null,
    yearlyData: null,
    monthlyData: null
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                currentData: action.payload,
                homeData: action.payload
            }
        case SET_MONTHLY_DATA:
            return {
                ...state,
                currentData: action.payload,
                monthlyData: action.payload
            }
        case SET_YEARLY_DATA:
            return {
                ...state,
                currentData: action.payload,
                yearlyData: action.payload
            }
        case UPDATE_DATA:
            if (action.payload === 'year') {
                return {
                    ...state,
                    currentData: state.homeData
                }
            } else if (action.payload === 'month') {
                return {
                    ...state,
                    currentData: state.yearlyData
                }
            }
        default:
            return state
    }
}