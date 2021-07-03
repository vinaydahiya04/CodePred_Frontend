import { LOGINUSER, LOGOUTUSER, REGISTERUSER, FORGOTPASSWORD } from './types'

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
        }).catch(err => { alert(err) });


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

                history.push("/");
            }
            else {
                alert(res.message)
            }
        }).catch(err => { alert(err) });


}

export const logoutUser = (history) => (dispatch) => {
    console.log('hello')
    dispatch({
        type: LOGOUTUSER
    })
    history.push("/login");
}

export const resetPassword = (user, history) => (dispatch) => {

    var myHeaders = new Headers()

    myHeaders.append('Content-type', 'application/json')

    var raw = JSON.stringify({
        email: user.email,
        password: user.password,
        new_password: user.new_password
    })

    var requestOptions = {
        headers: myHeaders,
        body: raw,
        method: "POST",
        redirect: "follow"
    }

    var api_link = data.url + "user/reset"

    fetch(api_link, requestOptions)
        .then(res => res.json())
        .then(res => {
            if (res.flag == 1) {
                alert('Password Change Succesful')
                dispatch({
                    type: LOGOUTUSER
                })
                history.push('/')
            }
            else {
                alert(res.message)
            }
        }).catch(err => { alert(err) })

}

export const forgotPassword = (user, history) => (dispatch) => {

    var myHeaders = new Headers()
    myHeaders.append('Content-type', 'application-json')

    var api_link = data.url + "user/forgot"

    var raw = JSON.stringify({
        email: user.email
    })

    var requestOptions = {
        method: "POST",
        redirect: "follow",
        body: raw,
        headers: myHeaders
    }

    fetch(api_link, requestOptions)
        .then(res => res.json())
        .then(res => {
            if (res.flag == 1) {
                alert(res.message)
            }
            else {
                alert(res.message)
            }

            history.push('/login')

        })
        .catch(err => { alert(err) })



}