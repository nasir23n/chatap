import React, { Component } from "react";
import axios from "axios";
import avatar from "./user.svg";
import "./login.css";

class Login extends Component {
	constructor(props) {
		super(props)
		this.wrap = React.createRef();
	}
	state = {
		email: '',
		password: '',
		remember: false,
	}
	handleInp = (e) => {
		if (e.target.name === 'email') {
			this.setState({email: e.target.value});
		}
		if (e.target.name === 'password') {
			this.setState({password: e.target.value});
		}
		if (e.target.name === 'remember') {
			this.setState({remember: e.target.checked});
		}
	}
	login = () => {
		// checkboxEffect
		let wrap = this.wrap.current;
		wrap.style.animationName = 'checkboxEffect';
		wrap.addEventListener('animationend', function() {
			wrap.style.animationName = '';
		});
		// axios
		axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')
			.then(response => {
				console.log(response);
				// axios.post('http://127.0.0.1:8000/api/login', {
				// 	email: this.email,
				// 	password: this.password
				// }).then(response => {
				// 	console.log(response)
				// })
			});
	}
	render() {
		const { email, password, remember } = this.state;
		return (
			<div className="wrap" ref={this.wrap}>
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
						onChange={this.handleInp}
						required
					/>
					<input
						style={{ marginBottom: "20px" }}
						className="fld"
						type="password"
						name="password"
						placeholder="Password"
						value={password}
						onChange={this.handleInp}
						required
					/>
					<div style={{ marginBottom: "20px" }}>
						<input
						className="remember"
						type="checkbox"
						id="remember"
						value={remember}
						onChange={this.handleInp}
						name="remember"
						/>
						<label htmlFor="remember" className="fre">
						<span className="fre_check"></span>
						Accept all things
						</label>
					</div>
					<button className="lgn" type="submit" onClick={this.login}>Login</button>
				</div>
			</div>
		);
	}
}

export default Login;
