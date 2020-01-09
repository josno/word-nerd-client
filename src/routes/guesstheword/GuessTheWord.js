import React, { Component } from 'react';
import './GuessTheWord.css';
import { Link } from 'react-router-dom';
import GamesService from '../../services/api-service';
import AnswerPage from '../../components/AnswerPage/AnswerPage';
import ScrambledWordPage from '../../components/ScrambledWordPage/ScrambledWordPage';
import PassTheBall from '../../components/Passtheball/PassTheBall';

class GuessTheWord extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showAnswer: false,
			passTheBall: false,
			randomWord: '',
			wordList: []
		};
		this.shuffleWord = this.shuffleWord.bind(this);
		this.renderAnswer = this.renderAnswer.bind(this);
		this.handleClick = this.handleClick.bind(this);
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

	renderAnswer = () => {
		this.setState({
			showAnswer: true
		});
	};

	componentDidMount() {
		GamesService.getGameContent(this.props.gameId)
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
			passTheBall: !this.state.passTheBall
		});
	};

	render() {
		const { wordList, randomWord, showAnswer, passTheBall } = this.state;

		const shuffledWord = this.shuffleWord(String(randomWord));
		console.log(wordList, randomWord, shuffledWord);

		return (
			<div className="guess-the-word-container">
				{showAnswer ? (
					<AnswerPage word={randomWord} />
				) : passTheBall ? (
					<PassTheBall />
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
