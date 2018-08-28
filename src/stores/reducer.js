
import postReducer from '../reducers/postReducer'
import { combineReducers } from 'redux'
import authReducer from '../reducers/AuthReducers/authReducer';

export default combineReducers({
     posts: postReducer,
     authReducer: authReducer
});