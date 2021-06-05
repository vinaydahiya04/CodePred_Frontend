import { combineReducers } from 'redux'
import graphReducer from './graphReducer'
import authReducer from './authReducer'

export default combineReducers({
    graph: graphReducer,
    auth: authReducer
});