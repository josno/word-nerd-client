import React, { Component } from 'react';
import './EntryOption.css';
import SignUp from '../signup/SignUp';
import Context from '../Context';
import Login from '../login/Login';

class EntryOption extends Component {
	static contextType = Context;
	constructor(props) {
		super(props);
		this.state = {
			formType: 'signUp'
		};
		this.toggleToSignUp = this.toggleToSignUp.bind(this);
		this.toggleToLogin = this.toggleToLogin.bind(this);
	}

	toggleToSignUp = () => {
		this.setState({
			formType: 'signup'
		});
	};

	toggleToLogin = () => {
		this.setState({
			formType: 'login'
		});
	};

	render() {
		const { formType } = this.state;
		return (
			<div className="entry-option">
				<div className="form">
					<ul>
						<li>
							<button
								className="form-tab"
								onClick={this.toggleToSignUp}
							>
								Sign Up
							</button>
						</li>

						<li>
							<button
								className="form-tab"
								onClick={this.toggleToLogin}
							>
								Login
							</button>
						</li>
					</ul>
					{formType === 'siginUp' ? (
						<SignUp />
					) : formType === 'login' ? (
						<Login />
					) : (
						<SignUp />
					)}
				</div>
			</div>
		);
	}
}

export default EntryOption;
