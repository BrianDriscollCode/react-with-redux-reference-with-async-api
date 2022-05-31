import  { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import usersReducer from './usersReducer';


export default combineReducers({

    posts: PostsReducer,
    users: usersReducer

});