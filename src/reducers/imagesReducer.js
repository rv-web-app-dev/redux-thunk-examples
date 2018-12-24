import { FETCH_RANDOM_IMAGES } from '../actions/fetchImages'

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_RANDOM_IMAGES: return action.payload
        default: return state
    }
}