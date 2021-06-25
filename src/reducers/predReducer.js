import { GETPRED, LOGOUTUSER } from './../actions/types'

const initialState = {
    flag: -1
}

export default function (state = initialState, action) {

    switch (action.type) {
        case GETPRED:
            console.log(action)
            return {
                ...state,
                flag: action.payload.flag,
                message: action.payload.message,
                data: action.payload.data
            }
        case LOGOUTUSER:
            return {
                ...state,
                flag: 0,
                message: "",
                data: []
            }
        default:
            return state
    }

}