import {
    RATE_SUCCESS,
    RATE_FAILURE,
    GET_RESULT
} 
from '../constants'
import fetch from 'isomorphic-fetch'




function successRate(data)
{   
    return {
        data,
        type: RATE_SUCCESS
    }
}

function resultGet(results)
{   
    return {
        type: GET_RESULT,
        results
    }
}

function failureRate(error)
{
    return {
        type: RATE_FAILURE,
        error
    }
}
//uzkrovus tinklapi
export function getResult()
{
    return async dispatch => {

        try {
            const respond = await fetch(`/rate`, {
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                },
                method: 'get'
            })
            const results = await respond.json()
            dispatch(resultGet(results))
        } catch(e) {
            dispatch(failureRate(e))
        }
    }
}
// Paspaudus mygtuka
export function ratePage(type)
{
    return async dispatch => {

        try {
            const respond = await fetch(`/rate?type=${type}`, {
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                },
                method: 'get'
            })
            const data = await respond.json()
            dispatch(successRate(data))
        } catch(e) {
            dispatch(failureRate(e))
        }
    }
}
