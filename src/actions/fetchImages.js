import axios from 'axios';
import { unsplashCfg } from '../axios.cfg.json';
export const FETCH_RANDOM_IMAGES = 'FETCH_RANDOM_IMAGES';

export const fetchRandomImages = () => {
    return dispatch => (
        axios(unsplashCfg)
            .then(response => {
                dispatch({
                    type: FETCH_RANDOM_IMAGES,
                    payload: response.data
                })
            }))
}