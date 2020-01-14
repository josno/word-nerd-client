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
			<div className="logged-in">
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
			</div>
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
			<nav role="navigation">
				<h1>
					<Link className="nav-title" to="/">
						Word Nerd
					</Link>
				</h1>
				{TokenService.hasAuthToken()
					? this.renderLogoutLink()
					: this.renderLoginLink()}
			</nav>
		);
	}
}

export default Navigation;
