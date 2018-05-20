import React, { Component } from 'react'
// import { connect } from 'react-redux'
class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input ref="todo" name="todo" />
            </div>
        )
    }
}
export default (Todo);