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
            console.log('bruhh')
            return {
                ...state,
                flag: 1,
                codeforces_handle: action.payload.codeforces_handle

            }
        case LOGINUSER:
            return {
                ...state,
                flag: 1,
                codeforces_handle: action.payload.codeforces_handle
            }
        default:
            return state
    }
}