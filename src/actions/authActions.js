import { LOGINUSER, LOGOUTUSER, REGISTERUSER } from './types'

import data from './../config'

export const registerUser = (user) => (dispatch) => {

    alert('bruhh')

    var myHeaders = new Headers()

    myHeaders.append('Content-Type', 'application/json')

    var raw = JSON.stringify({

        email: user.email,
        codeforces_handle: user.codeforces_handle,
        password: user.password
    });

    var requestOptions = {
        headers: myHeaders,
        method: "POST",
        redirect: "follow",
        body: raw

    }

    var api_link = data.url + "user/register"
    alert(api_link)

    fetch(api_link, requestOptions)
        .then(response => response.json())
        .then((res) => {
            if (res.flag == 1) {
                alert(res.message)
                dispatch({
                    type: REGISTERUSER,
                    payload: res.data

                })
            }
            else {
                alert(res.message)
            }
        })


}

export const loginUser = (user, history) => (dispatch) => {

    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    var raw = JSON.stringify({
        email: user.email,
        password: user.password
    })

    var requestOptions = {
        headers: myHeaders,
        method: "POST",
        redirect: "follow",
        body: raw
    }

    var api_link = data.url + "user/login"

    fetch(api_link, requestOptions)
        .then(res => res.json())
        .then((res) => {
            if (res.flag == 1) {
                dispatch({
                    type: LOGINUSER,
                    payload: res.data
                })
            }
            else {
                alert(res.message)
            }
        })


}