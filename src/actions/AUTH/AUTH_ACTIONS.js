import { LOGIN_WITH_GMAIL } from './AUTH_ACTION_TYPES'
import { firebaseConf as firebase } from '../../config/firebase'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const loginWithGmail = () => dispatch => {
    return new Promise((resolve, reject) => {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result => {
            if (result) {
                if (checkLoggedIn(result.user)) {
                    toast('alrady logged in!');
                    resolve(result);
                } else {
                    let token = result.credential.accessToken;
                    let user = result.user;
                    let data = Object.assign({}, { ...token, ...user });
                    dispatch({ type: LOGIN_WITH_GMAIL, payload: data });
                    toast('Successfully Logged in!')
                    resolve(result);
                }

            }
        }).catch(error => {
            console.log(error);
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            // ...
            reject(error);
        });
    });

}
export const checkLoggedIn = (user) => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            return true;
        } else {
            return false;
        }
    });
}
export const logout = () => {
    firebase.auth().signOut().then(function () {
        toast('Log out successfully');

    },(error) => {
        // An error happened.
        console.log(error);
    });
}