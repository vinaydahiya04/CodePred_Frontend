import { GETGRAPHDATA } from './types'
import config from './../config'

export const getGraphData = (user) => (dispatch) => {
    var myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json')



    var api_link = config.status + user + "&from=1&count=3000"

    console.log('hello')
    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };


    fetch(api_link)
        .then((response) => response.json())
        .then((res) => {
            dispatch({
                type: GETGRAPHDATA,
                payload: {
                    data: res
                }
            })
        })
        .catch((err) => alert(err));

};