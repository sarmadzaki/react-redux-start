import React from 'react';

export const LoginView = (props) => {
    let styleNone = {
        textAlign: 'center'
    }
    console.log(props)
    return (
        <div className="container">
            <div className="card card-container">
                <img id="profile-img" alt="Login" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                <p id="profile-name" className="profile-name-card"></p>
                <form className="form-signin" onSubmit={(e) => { props.loginWithEmailAndPassword(e) }}>
                    <span id="reauth-email" className="reauth-email"></span>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" autoComplete="off" required autoFocus />
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" autoComplete="off" required autoFocus />
                    <div id="remember" className="checkbox"><label><input type="checkbox" value="remember-me" /> Remember me</label></div>
                    <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
                </form>
                <a href="" className="forgot-password">Forgot the password?</a>
                <h3 style={styleNone}>OR</h3>
                {/* <button className="loginBtn loginBtn--facebook">Login with Facebook</button> */}
                <button className="loginBtn loginBtn--google" onClick={() => props.loginWithGmail()}>Login with Google</button>
                <button onClick={() => props.logout()}>logout</button>
                <br />
                <button className="btn btn-lg btn-primary btn-block btn-signin" onClick={() => props.updateView()}>Register</button>

            </div>
        </div>
    );
};

export const RegisterView = (props) => {
    return (
        <div className="container">
            <div className="card card-container">
                <img id="profile-img" alt="Login" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                <p id="profile-name" className="profile-name-card"></p>
                <form className="form-signin" onSubmit={(e) => { props.register(e) }}>
                    <span id="reauth-email" className="reauth-email"></span>
                    <input type="text" id="inputUsername" className="form-control" placeholder="Username" autoComplete="off" required autoFocus />
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" autoComplete="off" required autoFocus />
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" autoComplete="off" required autoFocus />
                    <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign Up</button>
                </form>
                <button className="btn btn-lg btn-primary btn-block btn-signin" onClick={() => props.updateView()}>Login</button>
            </div>
        </div>
    )
};

