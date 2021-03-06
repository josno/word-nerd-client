import React, { Component } from "react";
import "./EntryOption.css";
import SignUp from "../SignUp/SignUp";
import WordContext from "../../WordContext";
import Login from "../Login/Login";

class EntryOption extends Component {
	static contextType = WordContext;
	constructor(props) {
		super(props);
		this.state = {
			formType: "login",
		};
		this.toggleToSignUp = this.toggleToSignUp.bind(this);
		this.toggleToLogin = this.toggleToLogin.bind(this);
	}

	toggleToSignUp = () => {
		this.setState({
			formType: "signUp",
		});
	};

	toggleToLogin = () => {
		this.setState({
			formType: "login",
		});
	};

	render() {
		const { formType } = this.state;
		return (
			<section>
				<div className='entry-option-container'>
					<div className='entry-form'>
						<div className='demo-information'>
							<p> Login demo</p>
							<p> user: 'nerd' pass: 'nerdpass'</p>
						</div>

						<button
							aria-label='sign-up'
							className='form-tab sign-up-tab'
							onClick={this.toggleToSignUp}
						>
							Sign Up
						</button>

						<button
							aria-label='login'
							className='form-tab login-tab'
							onClick={this.toggleToLogin}
						>
							Login
						</button>

						{formType === "signUp" ? <SignUp /> : <Login />}
					</div>
				</div>
			</section>
		);
	}
}

export default EntryOption;
