import { GET_FILTERS } from '../constants'

const initialState = {
    result: {
        fetchedFilters: [

        ]
    }
}

export function filterReducer(state = initialState, action) {
    switch (action.type) {

            case GET_FILTERS:
            {
                return {
                    ...state,
                    fetchedFilters: action.fetchedFilters
                }
            }

        default:
            return {
                ...state
            }
    }
}

export default filterReducer