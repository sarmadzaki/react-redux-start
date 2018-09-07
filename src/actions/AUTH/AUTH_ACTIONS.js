import { LOGIN_WITH_GMAIL } from './AUTH_ACTION_TYPES'
import { firebaseConf as firebase } from '../../config/firebase'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const registerUser = async (data) => {
    try {
        let response = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
        if (!response) return console.log('somethign went wrong');
        let userRef = firebase.database().ref('/users');
        if (!userRef) {
            let dbResponse = await firebase.database().ref('/users').set({
                uid: response.user.uid,
                username: data.username,
                email: data.email,
                password: data.password
            });
            if (dbResponse) return toast('Successfully Registered');
        }
       let pushResponse = userRef.push({
            uid: response.user.uid,
            username: data.username,
            email: data.email,
            password: data.password
        });
        if(pushResponse) return toast('Successfully registered');
    }
    catch (error) {
        toast(error.message);
    }
}
export const loginWithGmail = () => dispatch => {
    return new Promise((resolve, reject) => {
        if (firebase.auth().currentUser) {
            return resolve({ logged: true });
        }
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result => {
            if (result) {
                let user = result.user.providerData[0];
                dispatch({ type: LOGIN_WITH_GMAIL, payload: user });
                toast('Successfully Logged in!')
                resolve(result);
            }
        }).catch(error => {
            console.log(error);
            /* let errorCode = error.code;
            let errorMessage = error.message;
            let email = error.email;
            let credential = error.credential; */
            reject(error);
        });
    });

}

export const loginWithEmailAndPassword = async (email, password) => dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(resp => {
        console.log(resp);

    }).catch(err => {e
        console.log(err.message);
    })
}

export const logout = () => {
    firebase.auth().signOut().then(() => {
        toast('Log out successfully');
    }, (error) => {
        console.log(error);
        toast(error);
    });
}
