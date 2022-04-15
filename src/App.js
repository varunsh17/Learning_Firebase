import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "./Components/firebase";

function App() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  const [password, setPassword] = useState('');
  onAuthStateChanged(auth, (cuser) => {
    if (cuser) {
      setUser(cuser);
      setPassword(cuser);
    } else { }

  });

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      //console.log("THIS IS NEW USER->", user);
    } catch (error) {
      console.log(error.message);
    }
  };


  const login = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      //console.log("THIS IS LOGIN PERSON->", user);

    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = () => {
    signOut(auth).then(() => {
      //console.log("THIS IS LOGGED OUT");
      setUser('');
    })
  };

  const deletedata = () => {
    console.log(user);
    user.delete().then(() => {
      console.log("THIS IS DELETED")
    })

  }
  return (
    <div className="App">
      <div>
        <h3> Register User </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register}> Create User</button>
      </div>

      <div>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}> Login</button>
      </div>

      <h4> User Logged In: {user?.email}</h4>

      <button onClick={logout}> Sign Out </button>
      <button onClick={deletedata}> DELETE ID </button>
    </div>
  );
}

export default App;