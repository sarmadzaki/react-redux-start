import { LOGIN_WITH_GMAIL } from './AUTH_ACTION_TYPES'
import { firebaseConf as firebase } from '../../config/firebase'

export const loginWithGmail = () => dispatch => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {
        let token = result.credential.accessToken;
        let user = result.user;
      let data = Object.assign({},{...token, ...user});
      dispatch({ type: LOGIN_WITH_GMAIL, payload: data })
    }).catch(error => {
        // Handle Errors here.
        console.log(error);
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used.
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        let credential = error.credential;
        // ...

    });
    
}