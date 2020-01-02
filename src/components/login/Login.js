import React, { Component } from 'react';
import WordContext from '../../WordContext';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import './Login.css';

class Login extends Component {
	static contextType = WordContext;
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = () => {
		const { username, password } = this.state;

		// TokenService.saveAuthToken(
		// 	TokenService.makeBasicAuthToken(username, password)
		// );

		AuthApiService.postLogin({
			user_name: username,
			password: password
		}) //passed in as one object
			.then(res => {
				// console.log(res.authToken);
				TokenService.saveAuthToken(res.authToken); //will only store the token when request is successful
				// this.props.onLoginSuccess();
			})
			.catch(res => {
				this.setState({ error: res.error });
			});
	};

	render() {
		return (
			<div className="login">
				<section>
					<div className="input-form">
						<input
							className="form-input"
							type="text"
							htmlFor="username"
							placeholder="username"
							value={this.state.username}
							name="username"
							onChange={e => this.handleChange(e)}
						/>
						<input
							className="form-input"
							type="password"
							htmlFor="password"
							placeholder="password"
							value={this.state.password}
							name="password"
							onChange={e => this.handleChange(e)}
						/>
					</div>

					<Link to="/game-home-page">
						<button
							className="input-submit-button"
							onClick={this.handleSubmit}
						>
							Login
						</button>
					</Link>
				</section>
			</div>
		);
	}
}

export default Login;
