import { NEW_POSTS, FETCH_POSTS } from './POST_ACTIONS_TYPES';


export const fetchPosts = () => dispatch => {
    console.log('Fetching....')
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            res.json()
                .then(posts => {
                    dispatch({
                        type: FETCH_POSTS,
                        payload: posts
                    })
                })
        })
}

export const createPosts = postData => dispatch => {
    console.log('create post called')
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post => {
            dispatch({
                type: NEW_POSTS,
                payload: post
            })
        })
}