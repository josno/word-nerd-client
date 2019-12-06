import React from 'react';
import { Link } from 'react-router-dom';
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
