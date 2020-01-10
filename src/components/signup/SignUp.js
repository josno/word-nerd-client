import React, { Component } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null
		};
	}

	handleSignUp = e => {
		e.preventDefault();
		this.setState({ error: null });
		const { username, password, fullName } = e.target;
		const newUser = {
			user_name: username.value,
			password: password.value,
			full_name: fullName.value
		};

		// console.log(newUser);

		AuthApiService.postUser(newUser)
			.then(res =>
				!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
			)
			.then(res => console.log(res));
		// .then(user => {
		// 	this.props.history.push('/game-home-page');
		// })
		// .catch(res => {
		// 	this.setState({ error: res.error });
		// });
	};

	capitalizeNames = string => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	render() {
		return (
			<div className="sign-up">
				<form onSubmit={this.handleSignUp}>
					<div className="input-form">
						<input
							className="form-input"
							type="text"
							htmlFor="full-name"
							placeholder="Full Name"
							name="fullName"
						/>

						<input
							className="form-input"
							type="text"
							htmlFor="username"
							placeholder="username"
							name="username"
						/>
						<input
							className="form-input"
							type="password"
							htmlFor="password"
							placeholder="password"
							name="password"
						/>
					</div>
					<button type="submit" className="input-submit-button">
						Sign Up
					</button>
				</form>
			</div>
		);
	}
}

export default SignUp;
