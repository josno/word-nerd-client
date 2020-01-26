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
							aria-label="full-name"
							placeholder="Full Name"
							name="fullName"
							required
						/>

						<input
							className="form-input"
							type="text"
							aria-label="username"
							placeholder="username"
							name="username"
							required
						/>
						<input
							className="form-input"
							type="password"
							aria-label="password"
							placeholder="password"
							name="password"
							required
						/>
					</div>
					<button
						aria-label="sign-up"
						type="submit"
						className="input-submit-button"
					>
						Sign Up
					</button>
				</form>
				<div className="error-message">{this.state.error}</div>
			</div>
		);
	}
}

export default withRouter(SignUp);
