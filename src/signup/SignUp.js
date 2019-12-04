import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="sign-up">
				<section>
					<div class="form">
						<ul>
							<li class="form-tab">
								<a href="one-home-page-sign-up.html">Sign Up</a>
							</li>

							<li class="form-tab">
								<a href="one-home-page-login.html">Log In</a>
							</li>
						</ul>
						<form>
							<div class="input-form">
								<input
									class="form-input"
									type="text"
									for="first-name"
									placeholder="First Name"
								/>
								<input
									class="form-input"
									type="text"
									for="last-name"
									placeholder="Last Name"
								/>
								<input
									class="form-input"
									type="text"
									for="username"
									placeholder="username"
								/>
								<input
									class="form-input"
									type="text"
									for="password"
									placeholder="password"
								/>
							</div>
						</form>
						<a href="two-game-home-page.html">
							<button class="input-submit-button">
								Sign Up For Free
							</button>
						</a>
					</div>
				</section>
			</div>
		);
	}
}

export default SignUp;
