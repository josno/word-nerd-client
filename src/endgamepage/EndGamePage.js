import React from 'react';
import { Link } from 'react-router-dom';
import './EndGamePage.css';

export default function EndGamePage() {
	return (
		<div className="end-game-page">
			<h1 class="end-message">Game Over</h1>
			<h2>Thanks for playing!</h2>
			<div class="game-controls">
				<Link to="/input-page">
					<button class="play-again">Play Again</button>
				</Link>
				<Link to="/game-home-page">
					<button class="home-button">Go Home</button>
				</Link>
			</div>
		</div>
	);
}
