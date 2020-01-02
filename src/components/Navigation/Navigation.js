import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import TokenService from '../../services/token-service';
import WordContext from '../../WordContext';

class Navigation extends Component {
	static contextType = WordContext;
	constructor(props) {
		super(props);
		this.state = {};
	}
	handleLogoutClick = () => {
		TokenService.clearAuthToken('word-nerd-token');
	};

	renderLogoutLink() {
		return (
			<div className="logged-in">
				<Link onClick={this.handleLogoutClick} to="/">
					Logout
				</Link>
			</div>
		);
	}

	renderLoginLink() {
		return (
			<div className="not-logged-in">
				<Link to="/">Log in</Link>
			</div>
		);
	}

	render() {
		return (
			<nav role="navigation">
				<Link to="/">
					<h1> Word Nerd</h1>
				</Link>
				{TokenService.hasAuthToken()
					? this.renderLogoutLink()
					: this.renderLoginLink()}
			</nav>
		);
	}
}

export default Navigation;
