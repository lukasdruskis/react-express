import { SUCCESSFULL_FETCH } from '../constants'


const initialState = {
    messages: []
}

export function messageReducer(state = initialState, action) {
    switch (action.type) {

    case SUCCESSFULL_FETCH:
    {
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