
import Button from './components/Button';
import { signInWithGoogle, signOut } from './login';

function App() {
  // Renderizar el Componente Button
  return (
    <div>

      {
        user ? (
          <>
            <Button onClick={signOut} > Sing in with Google</Button>
            <p> Bienvenidos al CHAT!</p>
          </>
        ) : <Button onClick={signInWithGoogle} > Sing in with Google</Button>


      }

    </div>
  );
}

export default App;
