import React, { Component } from 'react';
import { connect } from 'react-redux'
import Login from '../Auth/Login';

class Home extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);

  }
  render() {
    return (
      <div className="home">
              Home
      </div>
    );
  }
}
const mapDistpatchToProps = state => ({
  userData: state
})
export default connect(Login)(Home);
