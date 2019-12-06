import React, { Component } from 'react';
import './GuessTheWord.css';
import { Link } from 'react-router-dom';

class GuessTheWord extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="guess-the-word-container">
				<h1 className="pass-the-ball">Say The Word!</h1>
				<p className="scrambled-word">r l o e f w</p>
				<p>
					<h2>(Timer goes here)</h2>
				</p>
				<div className="game-controls">
					<Link to="/end-game-page">
						<button className="game-end">End Game</button>
					</Link>
					<Link to="/answer-page">
						<button className="answer-button">Answer</button>
					</Link>
					<Link to="/pass-the-ball">
						<button className="next-button">Next</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default GuessTheWord;
