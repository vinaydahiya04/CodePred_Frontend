import { GETPRED } from './types'
import config from './../config'

export const getPred = (handle, history) => (dispatch) => {

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json')




    var requestOptions = {
        headers: myHeaders,
        method: "GET",
        redirect: "follow"

    }

    let api_link = config.url + "prediction/info?handle=" + handle
    

    fetch(api_link).then(res => res.json()).then(res => {
        
        dispatch(
            {
                type: GETPRED,
                payload: res
            }
        )
    }).catch(err => alert(err));
}