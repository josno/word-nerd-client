import React, { Component } from 'react';
import './GuessTheWord.css';
import { Link } from 'react-router-dom';
import GamesService from '../../services/api-service';
import AnswerPage from '../../components/AnswerPage/AnswerPage';
import ScrambledWordPage from '../../components/ScrambledWordPage/ScrambledWordPage';
import PassTheBall from '../../components/PassTheBall/PassTheBall';

class GuessTheWord extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showAnswer: false,
			passTheBall: true,
			randomWord: '',
			wordList: []
		};
		this.shuffleWord = this.shuffleWord.bind(this);
		this.renderAnswer = this.renderAnswer.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	shuffleWord(string) {
		if (string.length <= 3) {
			const shortWordArray = string.split('');
			const shuffledShortWord =
				shortWordArray[1] + shortWordArray[0] + shortWordArray[2];
			return shuffledShortWord;
		} else {
			const stringToArray = string.split('');
			const unshuffled = stringToArray;
			const shuffled = unshuffled
				.map(a => ({ sort: Math.random(), value: a }))
				.sort((a, b) => a.sort - b.sort)
				.map(a => a.value);
			return shuffled;
		}
	}

	renderAnswer = () => {
		/* Don't show answer unless there's already a scrambled word*/
		if (this.state.passTheBall === false) {
			this.setState({
				showAnswer: true
			});
		}
	};

	componentDidMount() {
		GamesService.getGameContent(this.props.gameId)
			.then(responsejson =>
				this.setState({
					wordList: [...responsejson.word_list]
				})
			)
			.then(list => console.log('check'));
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
		const { randomWord, showAnswer, passTheBall } = this.state;

		const shuffledWord = this.shuffleWord(String(randomWord));

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
					<Link to={`/end-game-page`}>
						<button className="control-button">End</button>
					</Link>
					{this.state.renderAnswer ? (
						''
					) : (
						<button
							className="control-button"
							onClick={this.renderAnswer}
						>
							Answer
						</button>
					)}

					<button
						className="control-button"
						onClick={this.handleClick}
					>
						Next
					</button>
				</div>
			</div>
		);
	}
}

export default GuessTheWord;
