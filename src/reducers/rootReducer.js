import { combineReducers } from 'redux'
import graphReducer from './graphReducer'
import authReducer from './authReducer'
import predReducer from './predReducer'

export default combineReducers({
    graph: graphReducer,
    auth: authReducer,
    pred: predReducer
});