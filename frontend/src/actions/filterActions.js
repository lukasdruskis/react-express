import {
    GET_MODELS,
    GET_ADVERTS
} 
from '../constants'
import fetch from 'isomorphic-fetch'


function modelsFetch(fetchedModels) {
    return {
        fetchedModels,
        type: GET_MODELS
    }
}

function advertsFetch() {
    return {
        type: GET_ADVERTS
    }
}

//uzkrovus tinklapi
export function fetchModels(chosenModel)
{
    return async dispatch => {

        try {
            const respond = await fetch(`/filters/models?chosenModel=${chosenModel}`, {
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                },
                method: 'get'
            })
            const fetchedModels = await respond.json()
            dispatch(modelsFetch(fetchedModels))
        } catch(e) {
        }
    }
}

export function fetchAdverts()
{
    return async dispatch => {

        try {
            const respond = await fetch(`/filters/adverts`, {
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                },
                method: 'get'
            })
            const fetchedAdverts = await respond.json()
            dispatch(advertsFetch(fetchedAdverts))
        } catch(e) {
        }
    }
}

export default fetchModels