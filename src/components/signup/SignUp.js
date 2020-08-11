import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import "./SignUp.css";
import AuthApiService from "../../services/auth-api-service";
import TokenService from "../../services/token-service";
import WordContext from "../../WordContext";

const SignUp = (props) => {
	const context = useContext(WordContext);
	const [error, setError] = useState(null);
	const [signUp, setSignUp] = useState("");

	const handleSignUp = (e) => {
		e.preventDefault();
		const { username, password, fullName } = e.target;

		const newUser = {
			user_name: username.value.toLowerCase(),
			password: password.value,
			full_name: fullName.value.toLowerCase(),
		};

		AuthApiService.postUser(newUser)
			.then((res) => {
				TokenService.saveAuthToken(res.authToken);
				context.handleLogInState();
				props.history.push("/game-home-page");
			})
			.catch((res) => {
				setError(res.error);
			});
	};

	return (
		<div className='sign-up'>
			<form onSubmit={(e) => handleSignUp(e)}>
				<div className='input-form'>
					<input
						className='form-input'
						type='text'
						aria-label='full-name'
						placeholder='Full Name'
						name='fullName'
						required
					/>

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
					aria-label='sign-up'
					type='submit'
					className='input-submit-button'
				>
					Sign Up
				</button>
			</form>
			<div className='error-message'>{error}</div>
		</div>
	);
};

export default withRouter(SignUp);
