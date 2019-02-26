import {
    
    GET_FILTERS
} 
from '../constants'
import fetch from 'isomorphic-fetch'


function filtersFetch(fetchedFilters) {
    return {
        fetchedFilters,
        type: GET_FILTERS
    }
}

//uzkrovus tinklapi
export function fetchFilters(chosenModel)
{
    return async dispatch => {

        try {
            const respond = await fetch(`/filters?chosenModel=${chosenModel}`, {
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                },
                method: 'get'
            })
            const fetchedFilters = await respond.json()
            dispatch(filtersFetch(fetchedFilters))
        } catch(e) {
        }
    }
}

export default fetchFilters