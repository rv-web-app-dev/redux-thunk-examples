import axios from 'axios'
import { openweathermapCfg } from '../axios.cfg.json'
export const FETCH_WEATHER = 'FETCH_WEATHER'
let { url, APPID } = openweathermapCfg


/**
 * Demonstration of :
 * API call using async/await in redux Thunk
 * Usage of axios.get(url,{params:{}}) for a GET request 
 */

export const fetchWeather = (cityName, countryCode) => async dispatch => {
    let response = await axios.get(url, { params: { q: `${cityName},${countryCode}`, APPID:`${APPID}` } }) 
    // Equivalent of: url = `${url}?q=${cityName},${countryCode}&APPID=${APPID}`
    dispatch({ type: FETCH_WEATHER, payload: response.data })
}