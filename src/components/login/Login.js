import React, { useState, useContext } from "react";
import WordContext from "../../WordContext";
import { withRouter } from "react-router-dom";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import "./Login.css";

const Login = (props) => {
	const context = useContext(WordContext);

	const [error, setError] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		const { username, password } = e.target;

		AuthApiService.postLogin({
			user_name: username.value.toLowerCase(),
			password: password.value,
		})
			.then((res) => {
				username.value = "";
				password.value = "";
				TokenService.saveAuthToken(res.authToken);
			})
			.then((res) => {
				context.handleLogInState();
				props.history.push("/game-home-page");
			})
			.catch((res) => {
				setError({ error: res.error });
			});
	};

	return (
		<div className='login'>
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className='input-form'>
					<input
						className='form-input'
						type='text'
						aria-label='username'
						placeholder='username'
						name='username'
						required
					/>
					<input
						className='form-input'
						type='password'
						aria-label='password'
						placeholder='password'
						name='password'
						required
					/>
				</div>

				<button
					aria-label='login'
					type='submit'
					className='input-submit-button'
				>
					Login
				</button>
			</form>
			<div className='error-message'>{error}</div>
		</div>
	);
};

export default withRouter(Login);
