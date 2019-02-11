import { GET_MESSAGE } from '../constants'
import axios from 'axios'

// const data = await axios.get('/test')    
// const message = await data.data.data[0].message

export function getMessage() {
  return async dispatch => {
    const data = await axios.get('/test')
    const message = await data.data.data[0].message
    
    dispatch({
      type: GET_MESSAGE,
      message
    })
  }
}