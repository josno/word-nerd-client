import React, { Component } from 'react';
import WordContext from '../WordContext';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
	static contextType = WordContext;

	handleSubmit = e => {
		const { username, password } = e.target;

		const token = window.btoa(username.value + ':' + password.value); //encoding

		window.localStorage.setItem('token', token);
	};

	render() {
		return (
			<div clasName="login">
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
