import React from 'react';
import './EndGamePage.css';

export default function EndGamePage() {
	return (
		<div className="end-game-page">
			<h1 class="end-message">Game Over</h1>
			<h2>Thanks for playing!</h2>
			<div class="game-controls">
				<a href="three-input-page.html">
					<button class="play-again">Play Again</button>
				</a>
				<a href="two-game-home-page.html">
					<button class="home-button">Go Home</button>
				</a>
			</div>
		</div>
	);
}
