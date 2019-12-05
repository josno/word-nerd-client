import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="sign-up">
				<section>
					<form>
						<div class="input-form">
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
						<button class="input-submit-button">Login</button>
					</a>
				</section>
			</div>
		);
	}
}

export default Login;
