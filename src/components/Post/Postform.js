import React, { Component } from 'react';
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
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => {console.log(data)})
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
                        <input type="text" name="title"  value={this.state.title} onChange={(e) =>this.OnChange(e)}/>
                    </div>
                    <div>
                        <label>
                            Body:
                        </label>
                        <br />
                        <textarea name="body" value={this.state.body} onChange={(e) =>this.OnChange(e)}/>
                    </div>
                    <br />
                    <button type="submit">
                        Sumbit
                    </button>
                </form>
            </div>
        )
    }
}
export default PostForm;