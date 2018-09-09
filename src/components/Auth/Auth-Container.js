import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Auth.css';
import { loginWithGmail, logout, registerUser, loginWithEmailAndPassword as loginAsEmailAndPassword } from '../../actions/AUTH/AUTH_ACTIONS';
import { withRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { LoginView, RegisterView } from './Auth-Components';

class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = { view: true }

        console.log('constructor props', props);
    }
    loginwithgmail = async () => {
        try {
            let response = await this.props.loginWithGmail();
            if (response) {
                console.log(response)
                // this.props.history.push('/home')
            }

        } catch (error) {
            toast(error.massage);
            console.log('LOGIN ERROR', error)
        }
    }
    logout = () => {
        logout();
    }
    register = async (e) => {
        e.preventDefault();
        let username = e.target[0].value;
        let email = e.target[1].value;
        let password = e.target[2].value;
        let registered = await registerUser({ username, email, password });
        if (registered) console.log('registered', registered);
        console.log('registerdsad', registered)
    }
    updateView = () => {
        console.log('update view');
        console.log(this.state.view);
        this.setState({ view: !this.state.view });
    }
    loginWithEmailAndPassword = async (e) => {
        e.preventDefault();
       let response = await loginAsEmailAndPassword(e.target[0].value, e.target[1].value);
       if(response) {
           
       } else {
           console.log('Error');
       }
    }
    render() {
        return (
            <div>
                <ToastContainer />
                <div className="login-view container" >
                    {
                        this.state.view ?
                            <LoginView
                                loginWithGmail={this.loginwithgmail}
                                logout={this.logout}
                                updateView={this.updateView}
                                loginWithEmailAndPassword={this.loginWithEmailAndPassword} /> :
                            <RegisterView
                                updateView={this.updateView}
                                register={this.register} />}
                </div>
            </div>
        );
    }
}

Auth.propTypes = {
    loginWithGmail: PropTypes.func.isRequired,
    registerUser: PropTypes.func.isRequired,
    loginAsEmailAndPassword: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    userData: state.authReducer
});
export default withRouter(connect(mapStateToProps, { loginWithGmail, logout, registerUser, loginAsEmailAndPassword })(Auth));