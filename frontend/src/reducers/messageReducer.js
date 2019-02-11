import { SUCCESSFUL_FETCH, FETCHING_MESSAGE } from '../constants'

const initialState = {
    messages: [],
    isFetching: false
}

export function messageReducer(state = initialState, action) {
    switch (action.type) {

        case SUCCESSFUL_FETCH:
            {
                return {
                    ...state,
                    messages: action.message,
                    isFetching: action.isFetching
                }
            }

        case FETCHING_MESSAGE:
            {
                return {
                    ...state,
                    isFetching: action.isFetching
                }
            }

        default:
            return {
                ...state
            }
    }
}

export default messageReducer