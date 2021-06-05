import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'

const middleware = [thunk];
const initialState = {}

export const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
);