import { combineReducers } from '@reduxjs/toolkit'
import dataReducer from './dataReducer'
import pageReducer from './pageReducer'

export default combineReducers({
    data: dataReducer,
    page: pageReducer
})