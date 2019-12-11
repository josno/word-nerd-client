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
			wordList: [],
			filteredList: []
		};
		this.getAnswer = this.getAnswer.bind(this);
		this.shuffleWord = this.shuffleWord.bind(this);
	}

	shuffleWord(string) {
		const stringToArray = string.split('');
		const unshuffled = stringToArray;
		const shuffled = unshuffled
			.map(a => ({ sort: Math.random(), value: a }))
			.sort((a, b) => a.sort - b.sort)
			.map(a => a.value);
		return shuffled;
	}

	getAnswer(string) {
		this.setState({
			currentWord: string
		});

		this.context.getCurrentWord(string);
	}

	componentDidMount() {
		const { savedGames, currentGameId } = this.context;
		const currentGame = savedGames.find(i => currentGameId === i.game_id);
		const currentWordList = currentGame.words;
		this.setState({
			wordList: [...currentWordList]
		});
	}

	render() {
		const { wordList, filteredList } = this.state;
		console.log(wordList, filteredList);

		const randomWord =
			wordList[Math.floor(Math.random() * wordList.length)];

		const shuffledWord = this.shuffleWord(String(randomWord));

		return (
			<div className="guess-the-word-container">
				<h1 className="pass-the-ball">Say The Word!</h1>
				<p className="scrambled-word">{shuffledWord}</p>

				<div className="game-controls">
					<Link to="/end-game-page">
						<button className="game-end">End Game</button>
					</Link>
					<Link to="/answer-page">
						<button
							className="answer-button"
							onClick={() => this.getAnswer(randomWord)}
						>
							Answer
						</button>
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
