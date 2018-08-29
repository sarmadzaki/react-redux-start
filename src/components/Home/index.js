import React, { Component } from 'react';
import { connect } from 'react-redux'
class Home extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.userData);

  }
  render() {
    return (
      <div className="home">
              <img width="200px" height="200px" src={this.props.userData.photoURL} alt="display" />
             <h3>{this.props.userData.displayName}</h3>

      </div>
    );
  }
}
const mapStateToProps = state => ({
   ...state.authReducer
})
export default connect(mapStateToProps)(Home);
