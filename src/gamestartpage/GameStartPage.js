import React, { Component } from 'react';
import './GameStartPage.css';

class GameStart extends Component {
	state = {};
	render() {
		return (
			<div>
				<section>
					<div class="game-start-page">
						<header>
							<h1 class="game-instructions">How to Play:</h1>
							<p>Instructions go here</p>
							<h1 class="ready-message">
								Are you ready to play?
							</h1>
						</header>
						<a href="two-game-home-page.html">
							<button class="submit-cancel">No</button>
						</a>
						<a href="five-pass-the-ball.html">
							<button class="submit-input">Yes!</button>
						</a>
					</div>
				</section>
			</div>
		);
	}
}

export default GameStart;
