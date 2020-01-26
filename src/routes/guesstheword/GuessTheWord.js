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
			const unshuffled = string.split('');

			const shuffleString = function(str) {
				const shuffledWord = str
					.map(a => ({ sort: Math.random(), value: a }))
					.sort((a, b) => a.sort - b.sort)
					.map(a => a.value);
				if (shuffledWord === str) {
					shuffleString(shuffledWord);
				}
				return shuffledWord;
			};

			return shuffleString(unshuffled);
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
		GamesService.getGameContent(this.props.gameId).then(responsejson =>
			this.setState({
				wordList: [...responsejson.word_list]
			})
		);
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
			<main className="guess-the-word-container">
				{showAnswer ? (
					<AnswerPage word={randomWord} />
				) : passTheBall ? (
					<PassTheBall />
				) : (
					<ScrambledWordPage shuffledWord={shuffledWord} />
				)}

				<section className="game-controls">
					<Link to={`/end-game-page`}>
						<button aria-label="end" className="control-button">
							End
						</button>
					</Link>
					{this.state.renderAnswer ? (
						''
					) : (
						<button
							aria-label="answer"
							className="control-button"
							onClick={this.renderAnswer}
						>
							Answer
						</button>
					)}

					<button
						aria-label="next"
						className="control-button"
						onClick={this.handleClick}
					>
						Next
					</button>
				</section>
			</main>
		);
	}
}

export default GuessTheWord;
