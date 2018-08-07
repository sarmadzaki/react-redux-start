import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPosts } from '../../actions/POST/POST_ACTIONS'
class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
        }
    }

    OnSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPosts(post);
    }
    OnChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.OnSubmit(e)}>
                    <div>
                        <label>
                            Title:
                        </label>
                        <br />
                        <input type="text" name="title"  className="form-control" value={this.state.title} onChange={(e) => this.OnChange(e)} />
                    </div>
                    <div>
                        <label>
                            Body:
                        </label>
                        <br />
                        <textarea className="form-control" id="exampleTextarea" rows="3"
                        name="body" value={this.state.body} onChange={(e) => this.OnChange(e)} >
                        </textarea>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">
                        Sumbit
                    </button>
                </form>
            </div>
        )
    }
}
// PostForm.propTypes = {
//     createPosts: PropTypes.createPosts.func.isRequired
// }
 
const mapStateToProps = state => ({
    post: state.posts.item
}) 

export default connect(null, { createPosts })(PostForm);