import React from 'react';
import Ball from './ball.png';
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
			<div class="game-controls">
				<a href="eight-end-game.html">
					<button class="game-end">End Game</button>
				</a>
				<a href="six-guess-the-word.html">
					<button class="next-button">Next</button>
				</a>
			</div>
		</div>
	);
}
