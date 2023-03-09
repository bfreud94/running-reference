import { applyMiddleware, compose, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import reducer from './reducers'

const initialState = {}

const middleware = [thunk]

export default configureStore(
    {
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false
        })
    },
    initialState,
    process.env.NODE_ENV.includes('development')
    ? compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    : compose(
        applyMiddleware(...middleware)
    )
)