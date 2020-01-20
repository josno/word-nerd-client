import React, { Component } from 'react';
import EntryOption from '../../components/EntryOption/EntryOption';
import TokenService from '../../services/token-service';
import './Homepage.css';

class Homepage extends Component {
	render() {
		return (
			<div className="homepage">
				<header role="banner">
					<h1 className="home-page-title"> Word Nerd </h1>
				</header>
				<section className="app-description">
					<div className="app-description-container">
						<h3>
							Make english games to play in the classroom
							together.
						</h3>
						<p>
							Make a "Pass the Ball" game to play together in the
							classroom using your own vocabulary words.
						</p>
					</div>
				</section>
				<section>
					{TokenService.hasAuthToken() ? '' : <EntryOption />}
				</section>
			</div>
		);
	}
}

export default Homepage;
