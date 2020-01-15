import React, { Component } from 'react';
import './SignUp.css';
import AuthApiService from '../../services/auth-api-service';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			signUp: ''
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

		AuthApiService.postUser(newUser)
			.then(res =>
				this.setState({
					signUp: 'Signed up! Please log in.'
				})
			)
			.catch(res => this.setState({ error: res.error }));
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
							required
						/>

						<input
							className="form-input"
							type="text"
							htmlFor="username"
							placeholder="username"
							name="username"
							required
						/>
						<input
							className="form-input"
							type="password"
							htmlFor="password"
							placeholder="password"
							name="password"
							required
						/>
					</div>
					<button type="submit" className="input-submit-button">
						Sign Up
					</button>
				</form>
				{this.state.error === null ? (
					<div className="signup-message"> {this.state.signUp}</div>
				) : (
					<div className="error-message">{this.state.error}</div>
				)}
			</div>
		);
	}
}

export default SignUp;
