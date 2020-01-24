import React, { Component } from 'react';
import WordContext from '../../WordContext';
import { withRouter } from 'react-router-dom';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import './Login.css';

class Login extends Component {
	static contextType = WordContext;
	constructor(props) {
		super(props);
		this.state = {
			error: null
		};
	}

	handleSubmit = e => {
		e.preventDefault();
		this.setState({ error: null });
		const { username, password } = e.target;

		AuthApiService.postLogin({
			user_name: username.value.toLowerCase(),
			password: password.value
		}) //passed in as one object
			.then(res => {
				username.value = '';
				password.value = '';
				//will only store the token when request is successful
				TokenService.saveAuthToken(res.authToken);
			})
			.then(res => {
				this.context.handleLogInState();
				this.props.history.push('/game-home-page');
			})
			.catch(res => {
				this.setState({ error: res.error });
			});
	};

	render() {
		return (
			<div className="login">
				<form onSubmit={this.handleSubmit}>
					<div className="input-form">
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
						Login
					</button>
				</form>
				<div className="error-message">{this.state.error}</div>
			</div>
		);
	}
}

export default withRouter(Login);
