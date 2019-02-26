import {
    DATA_FETCH
} 
from '../constants'
import fetch from 'isomorphic-fetch'

function dataFetch(fetchedData) {
    return {
        fetchedData,
        type: DATA_FETCH
    }

}
export function fetchData(typedData)
{
    return async dispatch => {

        try {
            const respond = await fetch(`/randomdata?typedData=${typedData}`, {
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                },
                method: 'get'
            })
            const fetchedData = await respond.json()
            dispatch(dataFetch(fetchedData))

        } catch(e) {
            // dispatch(failureFetch(e))
            console.log(e)
        }
    }
}
  export default fetchData
