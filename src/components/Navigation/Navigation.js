import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import TokenService from "../../services/token-service";
import WordContext from "../../WordContext";

const Navigation = (props) => {
	const context = useContext(WordContext);

	const handleLogoutClick = () => {
		TokenService.clearAuthToken("word-nerd-token");
		context.handleLogInState();
	};

	const logoutLink = (
		<>
			<Link className='link-text' to='/game-home-page'>
				My Page
			</Link>
			<Link className='link-text' onClick={() => handleLogoutClick()} to='/'>
				Logout
			</Link>
		</>
	);

	const loginLink = (
		<div className='not-logged-in'>
			<Link className='link-text' to='/'>
				Log in
			</Link>
		</div>
	);

	return (
		<nav className='responsive-nav-wrapper'>
			<label htmlFor='toggle'>&#9776;</label>
			<input type='checkbox' id='toggle' />
			<div className='menu'>
				<Link id='nav-title' to='/'>
					PawPad
				</Link>
				{TokenService.hasAuthToken() ? logoutLink : loginLink}
			</div>
		</nav>
	);
};

export default Navigation;
