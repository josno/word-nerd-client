import React, { Component } from 'react';
import WordContext from '../WordContext';
import { Link, BrowserRouter } from 'react-router-dom';
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
	}

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
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
							type="text"
							htmlFor="password"
							placeholder="password"
							value={this.state.password}
							name="password"
							onChange={e => this.handleChange(e)}
						/>
					</div>
					<BrowserRouter>
						<Link to="/game-home-page">
							<button className="input-submit-button">
								Login
							</button>
						</Link>
					</BrowserRouter>
				</section>
			</div>
		);
	}
}

export default Login;
