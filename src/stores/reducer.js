
import postReducer from '../reducers/postReducer'
import { combineReducers } from 'redux'

export default combineReducers({
     posts: postReducer
});