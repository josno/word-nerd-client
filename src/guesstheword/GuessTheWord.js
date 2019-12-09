import React, { Component } from 'react';
import WordContext from '../WordContext';
import './GuessTheWord.css';
import { Link } from 'react-router-dom';

class GuessTheWord extends Component {
	static contextType = WordContext;
	constructor(props) {
		super(props);
		this.state = {
			currentWord: '',
			wordList: []
		};
		this.shuffleWords = this.shuffleWords.bind(this);
	}

	shuffleWords(string) {
		console.log(string);
		const stringToArray = string.split('');
		const unshuffled = stringToArray;
		const shuffled = unshuffled
			.map(a => ({ sort: Math.random(), value: a }))
			.sort((a, b) => a.sort - b.sort)
			.map(a => a.value);
		return shuffled;
	}

	componentDidMount() {
		const { inputWords } = this.context;
		this.setState({
			wordList: [...this.state.wordList, ...inputWords]
		});
	}

	render() {
		const { wordList } = this.state;
		const chosenWord =
			wordList[Math.floor(Math.random() * wordList.length)];
		const string = String(chosenWord);
		const shuffledWord = this.shuffleWords(string);
		return (
			<div className="guess-the-word-container">
				<h1 className="pass-the-ball">Say The Word!</h1>
				<p className="scrambled-word">{shuffledWord}</p>
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
