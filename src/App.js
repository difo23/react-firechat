import {
  db,
  googleAuthProvider,
  firebase
} from './config/firebase';
import Button from './components/Button';

//TODO: Hacer el login con Google.

function App() {

  const signInWithGoogle = async () => {

    // Coloca el lenguje de preferencia del dispositivo
    firebase.auth().useDeviceLanguage();

    // Incio el procedo de login dentro de un try ... catch

    try {
      await firebase.auth.singnInWithGooglePopup(googleAuthProvider);

    } catch (e) {
      console.error(e.message);
    }

  };


  // Renderizar el Componente Button
  return (
    <div>
      <Button onClick={signInWithGoogle} > Sing in with Google</Button>
    </div>
  );
}

export default App;
