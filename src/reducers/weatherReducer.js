import { FETCH_WEATHER } from '../actions/fetchWeather'
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_WEATHER: return action.payload
        default: return state
    }
}