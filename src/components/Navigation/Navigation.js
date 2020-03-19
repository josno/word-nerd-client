import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import TokenService from '../../services/token-service';
import WordContext from '../../WordContext';

class Navigation extends Component {
	static contextType = WordContext;

	handleLogoutClick = () => {
		TokenService.clearAuthToken('word-nerd-token');
		this.context.handleLogInState();
	};

	renderLogoutLink() {
		return (
			<>
				<Link className="link-text" to="/game-home-page">
					My Page
				</Link>
				<Link
					className="link-text"
					onClick={this.handleLogoutClick}
					to="/"
				>
					Logout
				</Link>
			</>
		);
	}

	renderLoginLink() {
		return (
			<div className="not-logged-in">
				<Link className="link-text" to="/">
					Log in
				</Link>
			</div>
		);
	}

	render() {
		return (
			<nav className="responsive-nav-wrapper">
				<label htmlFor="toggle">&#9776;</label>
				<input type="checkbox" id="toggle" />
				<div className="menu">
					<Link id="nav-title" to="/">
						PawPad
					</Link>
					{TokenService.hasAuthToken()
						? this.renderLogoutLink()
						: this.renderLoginLink()}
				</div>
			</nav>
		);
	}
}

export default Navigation;
