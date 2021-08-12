import { bindActionCreators } from 'redux'
import { REGISTERUSER, LOGINUSER, LOGOUTUSER } from './../actions/types'

const initialState = {
    flag: 0,
    codeforces_handle: "",
    email: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTERUSER:
            
            return {
                ...state,
                flag: 1,
                codeforces_handle: action.payload.codeforces_handle,
                email: action.payload.email

            }
        case LOGINUSER:
                        
            return {
                ...state,
                flag: 1,
                codeforces_handle: action.payload.user.codeforces_handle,
                email: action.payload.user.email
            }
        case LOGOUTUSER:
            return {
                ...state,
                flag: 0,
                codeforces_handle: "",
                email: ""
            }
        default:
            return state
    }
}