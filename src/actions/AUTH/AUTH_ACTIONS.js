import { LOGIN_WITH_GMAIL } from './AUTH_ACTION_TYPES'
import { firebaseConf as firebase } from '../../config/firebase'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const loginWithGmail = () => dispatch => {
    return new Promise((resolve, reject) => {
        if (firebase.auth().currentUser) {
           return resolve({logged: true});
        }
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result => {
            if (result) {
                let token = result.credential.accessToken;
                let user = result.user.providerData[0];
                let data = Object.assign({}, { ...token, ...user });
                dispatch({ type: LOGIN_WITH_GMAIL, payload: user });
                toast('Successfully Logged in!')
                resolve(result);
            }
        }).catch(error => {
            console.log(error);
            let errorCode = error.code;
            let errorMessage = error.message;
            let email = error.email;
            let credential = error.credential;
            reject(error);
        });
    });

}
export const logout = () => {
    firebase.auth().signOut().then( () => {
        toast('Log out successfully');

    }, (error) => {
        console.log(error);
        toast(error);
    });
}