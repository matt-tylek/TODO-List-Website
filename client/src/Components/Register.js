import React, { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";
import {
  auth,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import "./Register.css";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();
  const {user, setUser} = useContext(UserContext);
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password, () => {
      logInWithEmailAndPassword(email, password, (u) => {setUser(u)})
    });
  };
  useEffect(() => {
		if (user) {
      history.replace("/")
		}
	})
  return (
    <div class="register">
      <div>
        <h1>Register</h1>
      </div>
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <br/>
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <br/>
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br/>
        <button className="register__btn" onClick={register}>
          Register
        </button>
        <button
          className="register__btn register__google"
          onClick={() => signInWithGoogle((u) => setUser(u))}
        >
          Register with Google
        </button>
        <div>
          Already have an account? <a href="/">Login</a> now.
        </div>
      </div>
    </div>
  );
}
export default Register;