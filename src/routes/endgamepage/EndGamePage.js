import React from 'react';
import { Link } from 'react-router-dom';
import './EndGamePage.css';

export default function EndGamePage() {
	return (
		<div className="end-game-page">
			<h1 className="end-message">Game Over</h1>
			<h2>Thanks for playing!</h2>
			<div className="game-controls">
				<Link to="/game-home-page">
					<button className="home-button">
						Go Back To Games Home
					</button>
				</Link>
			</div>
		</div>
	);
}
