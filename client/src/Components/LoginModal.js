//help from https://blog.logrocket.com/user-authentication-firebase-react-apps/

import {useEffect, useState } from "react"
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";


export function LoginModal(props) {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const user = auth.currentUser;
	
	return (
		<div id="exampleModal" className="login" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
			<div className="modal-header">
				<h5>Login</h5>
			</div>
			<div className="modal-body login__container">
				<input className="login__textBox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address"></input>
				<input type="password" className="login__textBox" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"></input>
			</div>
			<div class="modal-body login__container">
				<button className="login__btn" onClick={() => logInWithEmailAndPassword(email, password)}>
					Login
				</button>
				<br/>
				<button className="login__btn login__google" onClick={signInWithGoogle}>
					Login with Google
				</button>
				<p class="login__text">
					<a href="/reset">Forgot Password</a><br/>
					Don't have an account? <Link to="/register">register</Link> now.
				</p>
			</div>
		</div>
		
	)
}