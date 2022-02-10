import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import localforage from "localforage";
import avatar from "./user.svg";
import "./login.css";
axios.defaults.baseURL = 'http://localhost:8000';
// axios.defaults.headers.common['Authorization'] = '';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
localforage.config({
    driver      : localforage.LOCALSTORAGE, // Force WebSQL; same as using setDriver()
    name        : 'myApp',
    version     : 1.0,
    size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
    storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
    description : 'some description'
});
const Login = ({ setToken })  => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [remember, setRemember] = useState(false);
	const wrap = useRef();
	const navigate = useNavigate();
	useEffect(() => {
		localforage.getItem('token', function (err, value) {
			if (value) {
				setToken(value);
				navigate('/');
			}
		});
	}, [navigate, setToken]);
	const login = () => {
		// checkboxEffect
		// wrap.current.style.animationName = 'checkboxEffect';
		// wrap.current.addEventListener('animationend', function() {
		// 	wrap.style.animationName = '';
		// });
		// axios
		axios.post('/api/login', {
			email: email,
			password: password
		}).then(response => {
			if (response.data) {
				let data = response.data;
				localforage.setItem('token', data.token).then(function () {
					return localforage.getItem('token');
				}).then(function (value) {
					setToken(value);
					navigate('/');
				}).catch(function (err) {
					console.log(err);
				});
			}
		});
	}
	
	return (
		<div className="wrap" ref={wrap}>
			<div className="frm">
				<div className="had">
					<img src={avatar} alt="" />
				</div>
				<h2 style={{ textAlign: "center" }}>Admin Login</h2>
				<input
					className="fld"
					type="email"
					name="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<input
					style={{ marginBottom: "20px" }}
					className="fld"
					type="password"
					name="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<div style={{ marginBottom: "20px" }}>
					<input
					className="remember"
					type="checkbox"
					id="remember"
					value={remember}
					onChange={(e) => setRemember(e.target.checked)}
					name="remember"
					/>
					<label htmlFor="remember" className="fre">
					<span className="fre_check"></span>
					Accept all things
					</label>
				</div>
				<button className="lgn" type="submit" onClick={() => login()}>Login</button>
			</div>
		</div>
	);

}

export default Login;
