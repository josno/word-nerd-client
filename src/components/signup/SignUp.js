import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './SignUp.css';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import WordContext from '../../WordContext';

class SignUp extends Component {
	static contextType = WordContext;
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
			user_name: username.value.toLowerCase(),
			password: password.value,
			full_name: fullName.value.toLowerCase()
		};

		AuthApiService.postUser(newUser)
			.then(res => {
				TokenService.saveAuthToken(res.authToken);
				this.context.handleLogInState();
				this.props.history.push('/game-home-page');
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
				{this.state.error === null ? (
					<div className="signup-message"> {this.state.signUp}</div>
				) : (
					<div className="error-message">{this.state.error}</div>
				)}
			</div>
		);
	}
}

export default withRouter(SignUp);
