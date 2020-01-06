import React, { Component } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			username: '',
			password: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.capitalizeNames = this.capitalizeNames.bind(this);
	}

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	capitalizeNames = string => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	render() {
		const { firstName, lastName, username, password } = this.state;
		return (
			<div className="sign-up">
				<section>
					<div className="input-form">
						<input
							className="form-input"
							type="text"
							htmlFor="first-name"
							placeholder="First Name"
							value={this.capitalizeNames(firstName)}
							name="firstName"
							onChange={e => this.handleChange(e)}
						/>
						<input
							className="form-input"
							type="text"
							htmlFor="last-name"
							placeholder="Last Name"
							value={this.capitalizeNames(lastName)}
							name="lastName"
							onChange={e => this.handleChange(e)}
						/>
						<input
							className="form-input"
							type="text"
							htmlFor="username"
							placeholder="username"
							value={username}
							name="username"
							onChange={e => this.handleChange(e)}
						/>
						<input
							className="form-input"
							type="text"
							htmlFor="password"
							placeholder="password"
							value={password}
							name="password"
							onChange={e => this.handleChange(e)}
						/>
					</div>
					<Link to="/game-home-page">
						<button className="input-submit-button">Sign Up</button>
					</Link>
				</section>
			</div>
		);
	}
}

export default SignUp;