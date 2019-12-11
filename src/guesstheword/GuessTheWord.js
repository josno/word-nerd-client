import React, { Component } from 'react';
import WordContext from '../WordContext';
import STORE from '../store/STORE';
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
		// this.shuffleWord = this.shuffleWord.bind(this);
		// this.handleClick = this.handleClick.bind(this);
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

	// changeWord = string => {
	// 	// console.log(string);
	// 	const { words } = this.state;
	// 	const updatedList = words.filter(word => word !== string);
	// 	console.log(updatedList);

	// 	this.setState({
	// 		filteredList: [...updatedList]
	// 	});
	// };

	// getCurrentGame(gameId) {
	// 	if (gameId === '') {
	// 	}
	// }

	componentDidMount() {
		this.setState({
			wordList: [...STORE.savedGames]
		});
	}

	render() {
		console.log(this.state);
		return (
			<div className="guess-the-word-container">
				<h1 className="pass-the-ball">Say The Word!</h1>
				{/* <p className="scrambled-word">{shuffledWord}</p> */}

				<div className="game-controls">
					<Link to="/end-game-page">
						<button className="game-end">End Game</button>
					</Link>
					<Link to="/answer-page">
						<button className="answer-button">Answer</button>
					</Link>
					<Link to="/pass-the-ball">
						<button
							className="next-button"
							type="submit"
							// onClick={() => this.changeWord(currentWord)}
						>
							Next
						</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default GuessTheWord;
