import { combineReducers } from 'redux'
import weatherReducer from './weatherReducer'
import imagesReducer from './imagesReducer'

export default combineReducers({
    weather : weatherReducer,
    randomImages : imagesReducer
})