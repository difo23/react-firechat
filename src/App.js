
import { Button, Channel } from './components';
import { signInWithGoogle, signOut } from './login';
import { useAuthState } from './hooks';
import { firebase } from './config/firebase';


function App() {
  //Entegracion del hook useAuthState
  const { user, initializing } = useAuthState(firebase.auth());
  // Renderezar en funcion de la exitencia de un usuario con operador ternario.


  const renderLoading = () => {
    if (initializing) {
      return <div>
        <h1>Loading ...</h1>
      </div>
    }
  }
  return (
    <div>
      { renderLoading()}
      {
        user ? (
          <>
            <Button onClick={signOut} > Logout Google</Button>
            <p> Bienvenidos al CHAT!</p>
            <Channel user={user} />
          </>
        ) : <Button onClick={signInWithGoogle} > Sing in with Google</Button>
      }

    </div>
  );
}

export default App;
