import axios from 'axios';
import {apiData} from '../axios.cfg.json';
export const FETCH_API_DATA = 'FETCH_API_DATA';
let {url}=apiData
//let url = `http://api.openweathermap.org/data/2.5/forecast?q=Austin,US&APPID=766ef409afb34068560969bbb8281fe8`;
/*export const fetchApiData = dispatch => {
    axios.get(url)
    .then(response => { dispatch({ type: FETCH_API_DATA, payload:response.data })})
}*/

export const fetchApiData = () => {
    return dispatch => (
        axios.get(url)
        .then(response => {
             dispatch({ 
                 type: FETCH_API_DATA, 
                 payload:response.data 
                })
            }))
}
/*

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

*/