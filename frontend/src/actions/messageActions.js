import { SUCCESSFUL_FETCH, FETCHING_MESSAGE } from '../constants'
import axios from 'axios'

function successfulFetch(message) {
  return {
    type: SUCCESSFUL_FETCH,
    message,
    isFetching: false
  }
}

function fetchingMessage() {
  return {
    type: FETCHING_MESSAGE,
    isFetching: true
  }
}

export function fetchMessage() {
  return async dispatch => {
    dispatch(fetchingMessage())
    try {
      const data = await axios.get('/test')
      const message =  data.data.message
      
      dispatch(successfulFetch(message))
    } catch (e) {
      console.log(e);
    }
  }
}