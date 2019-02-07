import { SUCCESSFULL_FETCH } from '../constants'
import axios from 'axios'

function successfullFetch(message) {
  return {
    type: SUCCESSFULL_FETCH,
    message
  }
}

export function fetchMessage() {
  return async dispatch => {
    try {
      const data = await axios.get('/test')
      const message =  data.data.message
      
      dispatch(successfullFetch(message))
    } catch (e) {
      console.log(e);
    }
  }
}