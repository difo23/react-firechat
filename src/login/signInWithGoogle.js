
import {
    googleAuthProvider,
    firebase
} from '../config/firebase';


const signInWithGoogle = async () => {

    // Coloca el lenguje de preferencia del dispositivo
    firebase.auth().useDeviceLanguage();

    // Incio el proceso de login dentro de un try ... catch

    try {
        await firebase.auth().signInWithPopup(googleAuthProvider);

    } catch (e) {
        console.error(e.message);
    }

};


export default signInWithGoogle;