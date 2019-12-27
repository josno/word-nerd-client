import React, { Component } from 'react';
import WordContext from '../../WordContext';
import './GuessTheWord.css';
import { Link } from 'react-router-dom';
import config from '../../config';
import TokenService from '../../services/token-service';
import AnswerPage from '../../components/answerpage/AnswerPage';
import ScrambledWordPage from '../../components/scrambledwordpage/ScrambledWordPage';

class GuessTheWord extends Component {
	static contextType = WordContext;
	constructor(props) {
		super(props);
		this.state = {
			wordList: [],
			filteredList: [],
			showAnswer: false
		};
		this.shuffleWord = this.shuffleWord.bind(this);
		this.showAnswer = this.showAnswer.bind(this);
		this.makeRandomWord = this.makeRandomWord.bind(this);
	}

	//add fetch to API against gameId
	//API fetch POST should return new game list, not empty
	//context for saving new game needs to get game id and history push game start
	//--make an api fetch when component needs it

	shuffleWord(string) {
		const stringToArray = string.split('');
		const unshuffled = stringToArray;
		const shuffled = unshuffled
			.map(a => ({ sort: Math.random(), value: a }))
			.sort((a, b) => a.sort - b.sort)
			.map(a => a.value);
		return shuffled;
	}

	showAnswer = () => {
		this.setState({
			showAnswer: true
		});
	};

	componentDidMount() {
		const { currentGameId } = this.context;
		// const url = `${config.API_ENDPOINT}/v1/games/${currentGameId}`;

		fetch(`${config.API_ENDPOINT}/v1/games/${currentGameId}`, {
			headers: {
				Authorization: `basic ${TokenService.getAuthToken()} `
			}
		})
			.then(response => response.json())
			.then(responsejson =>
				this.setState({
					wordList: [...responsejson.word_list]
				})
			)
			.then(list => this.makeRandomWord());
		// const currentGame = savedGames.find(i => currentGameId === i.id);
		// const currentWordList = currentGame.word_list;
		// this.setState({
		// 	wordList: [...currentWordList],
		// 	filteredList: [...filteredList]
		// });
	}

	makeRandomWord = () => {
		const { wordList } = this.state;
		const randomWord =
			wordList[Math.floor(Math.random() * wordList.length)];
		this.setState({
			randomWord: randomWord
		});

		return this.state.randomWord;
	};

	render() {
		const { wordList, randomWord } = this.state;
		console.log(wordList);

		const shuffledWord = this.shuffleWord(String(randomWord));

		return (
			<div className="guess-the-word-container">
				{this.state.showAnswer ? (
					<AnswerPage word={randomWord} />
				) : (
					<>
						<ScrambledWordPage shuffledWord={shuffledWord} />
					</>
				)}

				<div className="game-controls">
					<Link to="/end-game-page">
						<button className="game-end">End Game</button>
					</Link>
					{this.state.showAnswer ? (
						''
					) : (
						<button
							className="answer-button"
							onClick={this.showAnswer}
						>
							Answer
						</button>
					)}
					<Link to="/pass-the-ball">
						<button
							className="next-button"
							onClick={() => this.makeRandomWord()}
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
