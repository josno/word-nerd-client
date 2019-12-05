import React, { Component } from 'react';
import './GuessTheWord.css';

class GuessTheWord extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="guess-the-word-container">
				<h1 class="pass-the-ball">Say The Word!</h1>
				<p class="scrambled-word">r l o e f w</p>
				<p>
					<h2>(Timer goes here)</h2>
				</p>
				<div class="game-controls">
					<a href="eight-end-game.html">
						<button class="game-end">End Game</button>
					</a>
					<a href="seven-answer-page.html">
						<button class="answer-button">Answer</button>
					</a>
					<a href="five-pass-the-ball.html">
						<button class="next-button">Next</button>
					</a>
				</div>
			</div>
		);
	}
}

export default GuessTheWord;
