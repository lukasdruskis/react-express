import { DATA_FETCH } from '../constants'

const initialState = {
    fetchedData: [

    ]
    
}

export function searchReducer(state = initialState, action) {
    switch (action.type) {

            case DATA_FETCH:
            {
                return {
                    ...state,
                    fetchedData: action.fetchedData
                }
            }

        default:
            return {
                ...state
            }
    }
}

export default searchReducer