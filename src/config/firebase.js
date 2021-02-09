// Firebase deps

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Incializar firebase
const firebaseConfig = {
    apiKey: "AIzaSyAbEpwuQCPlRtWkc4QlXhmk6iVeX9mhOmI",
    authDomain: "firechat-test-ce691.firebaseapp.com",
    projectId: "firechat-test-ce691",
    storageBucket: "firechat-test-ce691.appspot.com",
    messagingSenderId: "769701094713",
    appId: "1:769701094713:web:08e70a470d52dc4feef4e8",
    measurementId: "G-TS96K1S04E"
  };


firebase.initializeApp({  
   firebaseConfig
});

// Tomo los elementos basicos para trabajar con firebase.

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}