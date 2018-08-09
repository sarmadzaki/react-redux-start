import * as firebase from 'firebase';
import {firebasConfig} from './keys'

firebase.initializeApp(firebasConfig);
export const databaseRef = firebase.database().ref();
export const firebaseConf = firebase;