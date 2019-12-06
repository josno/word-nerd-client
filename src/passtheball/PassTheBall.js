import React from 'react';
import Ball from './ball.png';
import { Link } from 'react-router-dom';
import './PassTheBall.css';

export default function PassTheBall() {
	return (
		<div className="pass-the-ball">
			<nav role="navigation">nav</nav>
			<h1 class="pass-the-ball">Pass The Ball!</h1>
			<p>
				<img alt="ball-placeholder" src={Ball} />
			</p>
			<p>
				<h2>(Timer goes here)</h2>
			</p>
			{/* need to be component */}
			<div class="game-controls">
				<Link to="/end-game-page">
					<button class="game-end">End Game</button>
				</Link>
				<Link to="/guess-the-word">
					<button class="next-button">Next</button>
				</Link>
			</div>
		</div>
	);
}
