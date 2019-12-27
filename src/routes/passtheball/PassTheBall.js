import React from 'react';
import Ball from './ball.png';
import { Link } from 'react-router-dom';
import './PassTheBall.css';

export default function PassTheBall() {
	return (
		<div className="game-play-container">
			<nav role="navigation">nav</nav>
			<h1 className="pass-the-ball">Pass The Ball!</h1>

			<img alt="ball-placeholder" src={Ball} />

			<h2>(Timer goes here)</h2>

			{/* need to be component */}
			<div className="game-controls">
				<Link to="/end-game-page">
					<button className="game-end">End Game</button>
				</Link>
				<Link to="/guess-the-word">
					<button className="next-button">Next</button>
				</Link>
			</div>
		</div>
	);
}
