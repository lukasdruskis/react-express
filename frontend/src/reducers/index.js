import { combineReducers } from 'redux'
import ratingReducer from './ratingReducer'
import searchReducer from './searchReducer'
import filterReducer from './filterReducer'

const rootReducer = combineReducers ({
    rate: ratingReducer,
    search: searchReducer,
    filter: filterReducer
})

export default rootReducer
