import "./App.css";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase/firebase.init";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((e) => {
        setUser({});
      });
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      {user.uid ? (
        <button onClick={handleSignOut}>sign out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Google sign in</button>
          <button onClick={handleGithubSignIn}>Github sign in</button>
        </>
      )}

      {user.uid && (
        <div>
          <h3>user name: {user.displayName}</h3>
          <p>Email : {user.email}</p>
          <img src={user.photoURL} alt="user" />
        </div>
      )}
    </div>
  );
}

export default App;
