import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash"

//this top function uses the lodash library
//this allows for network calls to only happen once
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
        //calls the fetch post action creator
        //calls the dispatch function in fetch posts and gets invoked

        await dispatch(fetchPosts()) 
        
        //store the unique ids of each post by calling getState
        const userIds = _.uniq(_.map(getState().posts, 'userId'))
        //iterate over each userID and dispatch to reducer
        userIds.forEach(id => dispatch(fetchUser(id)))

}

export const fetchPosts = () => async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts')

        dispatch({ type: 'FETCH_POSTS', payload: response.data})
};


export const fetchUser = id => async dispatch => {

        const response = await jsonPlaceholder.get(`/users/${id}`)

        dispatch({ type: 'FETCH_USER', payload: response.data });

};




//*****using lodash/memoize to only make network requests per post once

//*****regular fetchUser
// export const fetchUser = (id) => (dispatch) => {

//         _fetchUser(id, dispatch);
        
// }

// //******memoize version of fetch user

// const _fetchUser = _.memoize(async (id, dispatch) => {

//         const response = await jsonPlaceholder.get(`/users/${id}`)

//         dispatch({ type: 'FETCH_USER', payload: response.data})

// })