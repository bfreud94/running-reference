import { SET_INITIAL_DATA, SET_MONTHLY_DATA, SET_SORTED_KEYS, SET_YEARLY_DATA, UPDATE_DATA } from '../actions/types'

const initialState = {
    allActivities: null,
    currentData: null,
    homeData: null,
    homeDataTotals: null,
    monthlyData: null,
    sortKey: '',
    sortedKeys: [],
    sortOrder: 'NONE',
    yearlyData: null
}

export default (state = initialState, action: { payload: any, type: string }) => {
    switch (action.type) {
        case SET_INITIAL_DATA:
            const homeDataTotals = action.payload.totals
            delete action.payload.totals
            return {
                ...state,
                allActivities: Object.keys(action.payload).reduce((acc: any, curr: any) => ([...acc, ...action.payload[curr].activities]), []),
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
                sortedKeys: action.payload.activities.map(({ id }) => id)
            }
        case SET_SORTED_KEYS:
            const clickedSameColumn = action.payload.key === state.sortKey || state.sortKey
            const sortOrder = clickedSameColumn ? (
                state.sortOrder === 'NONE' ? 'DSC' : state.sortOrder === 'DSC' ? 'ASC' : 'NONE'
            ) : 'DSC'
            return {
                ...state,
                sortKey: action.payload.key,
                sortedKeys: action.payload.keys,
                sortOrder
            }
        case SET_YEARLY_DATA:
            return {
                ...state,
                currentData: action.payload,
                sortedKeys: Object.keys(action.payload),
                yearlyData: action.payload
            }
        case UPDATE_DATA:
            if (action.payload === 'distribution' || action.payload === 'home' || action.payload === 'year') {
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