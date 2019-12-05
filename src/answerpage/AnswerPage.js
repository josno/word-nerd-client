import React from 'react';
import './AnswerPage.css';

//will take prop from guesstheword page - returns the correct spelling

export default function AnswerPage(props) {
	return (
		<div classname="answer-page">
			<h1 class="pass-the-ball">The word was:</h1>
			<p class="scrambled-word">f l o w e r</p>
			<p>
				<h2>(Timer goes here)</h2>
			</p>
			<div class="game-controls">
				<a href="eight-end-game.html">
					<button class="game-end">End Game</button>
				</a>
				<a href="five-pass-the-ball.html">
					<button class="next-button">Next</button>
				</a>
			</div>
		</div>
	);
}
