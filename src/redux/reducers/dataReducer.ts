import { GET_DATA, SET_MONTHLY_DATA, SET_SORTED_KEYS, SET_YEARLY_DATA, UPDATE_DATA } from '../actions/types'

const initialState = {
    currentData: null,
    homeData: null,
    homeDataTotals: null,
    monthlyData: null,
    sortedKeys: [],
    sortOrder: 'NONE',
    yearlyData: null
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case GET_DATA:
            const homeDataTotals = action.payload.totals
            delete action.payload.totals
            return {
                ...state,
                currentData: action.payload,
                homeData: action.payload,
                homeDataTotals,
                sortedKeys: Object.keys(action.payload)
            }
        case SET_MONTHLY_DATA:
            return {
                ...state,
                currentData: action.payload,
                monthlyData: action.payload,
                sortedKeys: Object.keys(action.payload)
            }
        case SET_SORTED_KEYS:
            return {
                ...state,
                sortedKeys: action.payload,
                sortOrder: state.sortOrder === 'NONE' ? 'ASC' : state.sortOrder === 'ASC' ? 'DSC' : 'NONE'
            }
        case SET_YEARLY_DATA:
            return {
                ...state,
                currentData: action.payload,
                sortedKeys: Object.keys(action.payload),
                yearlyData: action.payload
            }
        case UPDATE_DATA:
            if (action.payload === 'year') {
                return {
                    ...state,
                    currentData: state.homeData,
                    sortedKeys: Object.keys(state.homeData || {})
                }
            } else if (action.payload === 'month') {
                return {
                    ...state,
                    currentData: state.yearlyData,
                    sortedKeys: Object.keys(state.yearlyData || {})
                }
            }
        default:
            return state
    }
}