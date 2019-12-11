import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './GameStartPage.css';

class GameStart extends Component {
	state = {};
	render() {
		return (
			<div>
				<section>
					<div className="game-start-page">
						<header>
							<h1 className="game-instructions">How to Play:</h1>
							<p>Instructions go here</p>
							<h1 className="ready-message">
								Are you ready to play?
							</h1>
						</header>
						<Link to="/game-home-page">
							<button className="submit-cancel">No</button>
						</Link>
						<Link to="/pass-the-ball">
							<button className="submit-input">Yes!</button>
						</Link>
					</div>
				</section>
			</div>
		);
	}
}

export default GameStart;
