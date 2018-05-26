import { NEW_POSTS,FETCH_POSTS } from './POST_ACTIONS_TYPES';


export const fetchPosts = () => dispatch =>  {
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