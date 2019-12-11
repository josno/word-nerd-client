import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './InputPage.css';
import Preview from '../preview/Preview.js';
import WordContext from '../WordContext';

class InputPage extends Component {
	static contextType = WordContext;
	constructor(props) {
		super(props);
		this.state = {
			textInput: '',
			wordList: [],
			newGame: '',
			title: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.updatePreview = this.updatePreview.bind(this);
	}

	updatePreview = e => {
		const { value } = e.target;
		/*Create an array and split by comma as user types*/

		const newList = value.split(',').map(i => i.trim());
		this.setState({
			textInput: value,
			wordList: newList
		});
	};

	updateTitle(e) {
		const { value } = e.target;

		this.setState({
			title: value
		});
	}

	handleSubmit(e) {
		const { savedGames } = this.context;
		const { title, wordList } = this.state;
		const newGameId = savedGames.length + 1;
		const newGame = {
			game_id: newGameId,
			title: title,
			words: wordList,
			date_created: new Date()
		};

		this.context.saveNewGame(newGame);
		this.context.getSavedGameId(newGameId);
	}

	render() {
		const { wordList } = this.state;

		return (
			<div>
				<section>
					<header className="input-instructions">
						<h1>Type Words into the Box Separated by Commas</h1>
					</header>
					<form>
						<input
							className="title-name"
							placeholder='Game Title example: "Numbers" '
							onChange={e => this.updateTitle(e)}
						/>
						<div className="input-container">
							<textarea
								className="input-box"
								placeholder="Write Words Here"
								aria-label="Type your words here"
								aria-required="true"
								onChange={e => this.updatePreview(e)}
							/>
						</div>
					</form>
					<h2>Review Words</h2>
					{wordList.map((word, index) => (
						<Preview key={index} word={word} />
					))}
					<div className="submit-button-container">
						<Link to="/game-home-page">
							<button className="submit-cancel">Cancel</button>
						</Link>
						<Link to="/game-start-page">
							<button
								className="submit-input"
								type="submit"
								onClick={e => this.handleSubmit(e)}
							>
								Submit
							</button>
						</Link>
					</div>
				</section>
			</div>
		);
	}
}

export default InputPage;
