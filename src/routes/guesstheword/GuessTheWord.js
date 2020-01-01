import React, { Component } from 'react';
import WordContext from '../../WordContext';
import './GuessTheWord.css';
import { Link } from 'react-router-dom';
import config from '../../config';
import TokenService from '../../services/token-service';
import AnswerPage from '../../components/answerpage/AnswerPage';
import ScrambledWordPage from '../../components/scrambledwordpage/ScrambledWordPage';
import PassTheBall from '../../components/passtheball/PassTheBall';

class GuessTheWord extends Component {
	static contextType = WordContext;
	constructor(props) {
		super(props);
		this.state = {
			showAnswer: false,
			passTheBall: false,
			randomWord: ''
		};
		this.shuffleWord = this.shuffleWord.bind(this);
		this.renderAnswer = this.renderAnswer.bind(this);
		this.handleClick = this.handleClick.bind(this);
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

	renderAnswer = () => {
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
			.then(list => this.handleClick());
	}

	handleClick = () => {
		const { wordList } = this.state;
		const randomWord =
			wordList[Math.floor(Math.random() * wordList.length)];

		this.setState({
			randomWord: randomWord,
			showAnswer: false,
			passTheBall: true
		});

		setTimeout(() => {
			this.setState({ passTheBall: false });
		}, 2000);

		//random timer between 30 to 60 seconds
		//Math.random() * (60000 - 30000) + 30000;
	};

	render() {
		const { wordList, randomWord, showAnswer, passTheBall } = this.state;
		console.log(wordList);

		const shuffledWord = this.shuffleWord(String(randomWord));

		return (
			<div className="guess-the-word-container">
				{showAnswer ? (
					<AnswerPage word={randomWord} />
				) : passTheBall ? (
					<PassTheBall pause={true} />
				) : (
					<ScrambledWordPage shuffledWord={shuffledWord} />
				)}

				<div className="game-controls">
					<Link to="/end-game-page">
						<button className="game-end">End Game</button>
					</Link>
					{this.state.renderAnswer ? (
						''
					) : (
						<button
							className="answer-button"
							onClick={this.renderAnswer}
						>
							Answer
						</button>
					)}

					<button className="next-button" onClick={this.handleClick}>
						Next
					</button>
				</div>
			</div>
		);
	}
}

export default GuessTheWord;
