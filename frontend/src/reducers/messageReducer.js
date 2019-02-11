import { GET_MESSAGE } from '../constants'


const initialState = {
  messages: []
}

export function messageReducer(state = initialState, action)
{
  switch(action.type) {

      case GET_MESSAGE: {
          return {
              ...state,              
              messages: action.message
          }
      }

      default: 
          return {
              ...state
          }
  }
}

export default messageReducer
