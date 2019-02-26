import { GET_MODELS, GET_ADVERTS } from '../constants'

const initialState = {
    result: {
        fetchedModels: [

        ],
        fetchedAdverts: [
            
        ]
    }
}

export function filterReducer(state = initialState, action) {
    switch (action.type) {

            case GET_MODELS:
            {
                return {
                    ...state,
                    fetchedModels: action.fetchedModels
                }
            }

            case GET_ADVERTS:
            {
                return {
                    ...state,
                    fetchedAdverts: action.fetchedAdverts
                }
            }

        default:
            return {
                ...state
            }
    }
}

export default filterReducer