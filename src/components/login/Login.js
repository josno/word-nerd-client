import React, { Component } from './node_modules/react';
import WordContext from '../../WordContext';
import { withRouter } from './node_modules/react-router-dom';
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
			user_name: username.value,
			password: password.value
		}) //passed in as one object
			.then(res => {
				console.log(res.authToken);
				username.value = '';
				password.value = '';
				TokenService.saveAuthToken(res.authToken); //will only store the token when request is successful
				// this.props.history.push('/game-home-page');
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
						Login
					</button>
				</form>
			</div>
		);
	}
}

export default withRouter(Login);
