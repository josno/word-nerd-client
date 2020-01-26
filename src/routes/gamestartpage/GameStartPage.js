import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './GameStartPage.css';

class GameStart extends Component {
	render(props) {
		return (
			<main class="game-start-container">
				<header>
					<div className="how-to-play-box">
						<h1 className="game-instructions">How to Play:</h1>
						<ol className="game-instructions-list-container">
							<li className="instructions-list-item">
								Pass the ball around while the music plays.
							</li>
							<li className="instructions-list-item">
								The music will stop!
							</li>
							<li className="instructions-list-item">
								If you have the ball, guess the word on the
								screen.
							</li>
							<li className="instructions-list-item">
								The words are scrambled!
							</li>
							<li className="instructions-list-item">
								Good luck!
							</li>
						</ol>
					</div>
					<h1 className="ready-message">Are you ready?</h1>
					<p className="mobile-device-note">
						***If you are on a mobile device, change to landscape
						format now***
					</p>
				</header>
				<Link to="/game-home-page">
					<button aria-label="no" className="start-submit-cancel">
						No
					</button>
				</Link>
				<Link to={`/game/${this.props.gameId}/guess-the-word/`}>
					<button aria-label="yes" className="start-submit-cancel">
						Yes!
					</button>
				</Link>
			</main>
		);
	}
}

export default GameStart;
