import React, { Component } from 'react';
import './EntryOption.css';
import SignUp from '../signup/SignUp';
import Login from '../login/Login';

class EntryOption extends Component {
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
				<div class="form">
					<ul>
						<li class="form-tab">
							<button onClick={this.toggleToSignUp}>
								Sign Up
							</button>
						</li>

						<li class="form-tab">
							<button onClick={this.toggleToLogin}>Login</button>
						</li>
					</ul>
					<div class="form">
						{formType === 'signUp' ? (
							<SignUp />
						) : formType === 'login' ? (
							<Login />
						) : (
							<SignUp />
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default EntryOption;
