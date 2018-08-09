import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Login.css';
import { loginWithGmail } from '../../actions/AUTH/AUTH_ACTIONS'
class Login extends Component {
    styleNone= {
        textAlign: 'center'
    }
    constructor(props) {
        super(props);
        console.log(props);
    }
  render() {
      return (
        <div className="container">
        <div className="card card-container">
            <img id="profile-img" alt="Login" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" className="profile-name-card"></p>
            <form className="form-signin">
                <span id="reauth-email" className="reauth-email"></span>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                <div id="remember" className="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
            </form>
            <a href="" className="forgot-password">
                Forgot the password?
            </a>
            <h3 style={this.styleNone}>OR</h3>
                <button className="loginBtn loginBtn--facebook">
                    Login with Facebook
                </button>

                <button className="loginBtn loginBtn--google" onClick={() => this.props.loginWithGmail()}>
                Login with Google
                </button>
        </div>
    </div>
    );
  }
}

Login.propTypes = {
    loginWithGmail: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    
})
export default connect(mapStateToProps, { loginWithGmail })(Login);