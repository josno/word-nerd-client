import React, { Component } from 'react';
import './EntryOption.css';
import SignUp from '../SignUp/SignUp';
import WordContext from '../../WordContext';
import Login from '../Login/Login';

class EntryOption extends Component {
	static contextType = WordContext;
	constructor(props) {
		super(props);
		this.state = {
			formType: 'login'
		};
		this.toggleToSignUp = this.toggleToSignUp.bind(this);
		this.toggleToLogin = this.toggleToLogin.bind(this);
	}

	toggleToSignUp = () => {
		this.setState({
			formType: 'signUp'
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
				<div className="entry-form">
					<ul>
						<li className="form-tab-list-item">
							<button
								className="form-tab"
								onClick={this.toggleToSignUp}
							>
								Sign Up
							</button>
						</li>

						<li className="form-tab-list-item">
							<button
								className="form-tab"
								onClick={this.toggleToLogin}
							>
								Login
							</button>
						</li>
					</ul>
					{formType === 'signUp' ? <SignUp /> : <Login />}
				</div>
			</div>
		);
	}
}

export default EntryOption;
