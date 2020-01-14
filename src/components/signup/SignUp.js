import React, { Component } from 'react';
import './SignUp.css';
import AuthApiService from '../../services/auth-api-service';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			signUpSuccess: ''
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
			.then(res => {
				!res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
				this.setState({
					signUpSuccess: 'Signed up! Please log in.'
				});
			})
			.catch(res => {
				this.setState({ error: res.error });
			});
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
				<div className="error-message">{this.state.error}</div>
				<div className="sign-up-sucess-message">
					{this.state.signUpSuccess}
				</div>
			</div>
		);
	}
}

export default SignUp;
