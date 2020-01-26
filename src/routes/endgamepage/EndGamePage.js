import React from 'react';
import { Link } from 'react-router-dom';
import './EndGamePage.css';

export default function EndGamePage() {
	return (
		<main className="end-game-page">
			<header>
				<h1 className="end-message">Game Over</h1>
			</header>
			<h2>Thanks for playing!</h2>
			<section className="end-game-controls">
				<Link to="/game-home-page">
					<button aria-label="go-back" className="home-button">
						Go Back To Games Home
					</button>
				</Link>
			</section>
		</main>
	);
}
