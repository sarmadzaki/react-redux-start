import { FETCH_POSTS, NEW_POSTS } from '../actions/POST/POST_ACTIONS_TYPES'


const initialState = {
    items: [],
    item: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
        console.log('FETCH_POST_REDUCER');
        return {
            ...state,
            items: action.payload
        }
        case NEW_POSTS:
        return {
            ...state,
            item: action.payload
        }
        default:
            return state
    }
}