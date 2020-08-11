<<<<<<< HEAD
import React, { Component } from "react";
=======
import React, { useContext } from "react";
>>>>>>> 1a1fa28c503e6e9cf09278bd7a2032d11a21de42
import { Link } from "react-router-dom";
import "./Navigation.css";
import TokenService from "../../services/token-service";
import WordContext from "../../WordContext";

const Navigation = (props) => {
	const context = useContext(WordContext);

<<<<<<< HEAD
	handleLogoutClick = () => {
		TokenService.clearAuthToken("word-nerd-token");
		this.context.handleLogInState();
	};

	renderLogoutLink() {
		return (
			<>
				<Link className='link-text' to='/game-home-page'>
					My Page
				</Link>
				<Link className='link-text' onClick={this.handleLogoutClick} to='/'>
					Logout
				</Link>
			</>
		);
	}

	renderLoginLink() {
		return (
			<div className='not-logged-in'>
				<Link className='link-text' to='/'>
					Log in
=======
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
>>>>>>> 1a1fa28c503e6e9cf09278bd7a2032d11a21de42
				</Link>
				{TokenService.hasAuthToken() ? logoutLink : loginLink}
			</div>
<<<<<<< HEAD
		);
	}

	render() {
		return (
			<nav className='responsive-nav-wrapper'>
				<label htmlFor='toggle'>&#9776;</label>
				<input type='checkbox' id='toggle' />
				<div className='menu'>
					<Link id='nav-title' to='/'>
						Word Nerd
					</Link>
					{TokenService.hasAuthToken()
						? this.renderLogoutLink()
						: this.renderLoginLink()}
				</div>
			</nav>
		);
	}
}
=======
		</nav>
	);
};
>>>>>>> 1a1fa28c503e6e9cf09278bd7a2032d11a21de42

export default Navigation;
