import React from 'react';
import { Link } from 'react-router-dom';
import './AnswerPage.css';

//will take prop from guesstheword page - returns the correct spelling

export default function AnswerPage(props) {
	return (
		<div className="answer-page">
			<h1 className="pass-the-ball">The word was:</h1>
			<p className="scrambled-word">{props.word}</p>
			<p>
				<h2>(Timer goes here)</h2>
			</p>
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
