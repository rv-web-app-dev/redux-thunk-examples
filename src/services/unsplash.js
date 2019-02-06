import axios from 'axios'
import { unsplashCfg } from '../axios.cfg.json'

export default async () => {
   let response = await axios(unsplashCfg)
   //let data = await axios.json()
   return response
}
    /*

    axios(unsplashCfg)
            .then(response => {
                dispatch({
                    type: FETCH_RANDOM_IMAGES,
                    payload: response.data
                })
            })) */