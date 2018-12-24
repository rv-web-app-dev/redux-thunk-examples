import { combineReducers } from 'redux'
import apiDataReducer from './apiDataReducer'
import imagesReducer from './imagesReducer'

export default combineReducers({
    apiData : apiDataReducer,
    randomImages : imagesReducer
})