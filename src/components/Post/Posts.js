import React, { Component } from 'react';
import { connect } from 'react-redux'
import  PropTypes  from 'prop-types'
import { fetchPosts } from '../../actions/POST_ACTIONS'
class Post extends Component {
    
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        const postsItem = this.props.posts.map(post => {
           return <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        })
        return (
            <div>
                <h3>Posts</h3>
                {postsItem}
            </div>
        )
    }
}
Post.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
    posts: state.posts.items
})
export default connect(mapStateToProps, {fetchPosts})(Post);