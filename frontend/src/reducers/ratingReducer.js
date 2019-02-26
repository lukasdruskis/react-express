import { RATE_SUCCESS, GET_RESULT } from '../constants'

const initialState = {
    result: {
    likes:0,
    dislikes:0,
    result:0,
    show:true
    }
}

export function ratingReducer(state = initialState, action) {
    switch (action.type) {
        case RATE_SUCCESS:
            {
                const result =  action.data.message ? {...state.result, message: action.data.message}: {...action.data}
                return {
                    ...state,
                    result
                }
            }

            case GET_RESULT:
            {
                return {
                    ...state,
                    result: action.results
                }
            }

        default:
            return {
                ...state
            }
    }
}

export default ratingReducer