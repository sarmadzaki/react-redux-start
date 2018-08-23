import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPosts } from '../../actions/POST/POST_ACTIONS'
class Post extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postsItem = this.props.posts.map(post => {
            return (
                <div key={post.id}>

                    <div className="card" style={cardStyle} >
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">
                                {post.body}
                            </p>
                        </div>
                    </div>
                    <br/>
                </div>
            );
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
    posts: state.posts.items,
    newPost: state.posts.item
})
const cardStyle = {
    width: '100%'
}
export default connect(mapStateToProps, { fetchPosts })(Post);