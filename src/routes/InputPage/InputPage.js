import React, { Component } from 'react';
import './InputPage.css';
import ValidationMessage from '../../components/ValidationMessage/ValidationMessage';
import GamesService from '../../services/api-service';

class InputPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			textInput: { value: '', touched: false },
			wordList: [],
			newGame: '',
			title: { value: '', title: false }
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.validateInput = this.validateInput.bind(this);
		this.setInputStringToArray = this.setInputStringToArray.bind(this);
	}

	setInputStringToArray = e => {
		const { value } = e.target;
		/*Create an array and split by comma as user types
		so students can review the words*/

		const newList = e.target.value.split(',').map(i => i.trim());
		this.setState({
			textInput: { value: value, touched: true },
			wordList: newList
		});
	};

	updateTitle(e) {
		const { value } = e.target;

		this.setState({
			title: { value: value, touched: true }
		});
	}

	validateInput() {
		const textInput = this.state.textInput.value;
		if (!textInput.includes(',')) {
			return 'Add a comma after each word.';
		}

		const invalidChar = textInput.match(/[^a-z,\s]/g);
		if (invalidChar) {
			return 'Type only letters please.';
		}
	}

	validateTitle() {
		const titleInput = this.state.title.value;
		const invalidChar = titleInput.match(/[^a-zA-Z,\s]/g);
		if (invalidChar) {
			return 'Type only letters please.';
		}
	}

	async handleSubmit(e) {
		e.preventDefault();
		const newGame = {
			title: this.state.title.value,
			word_list: this.state.wordList,
			date_created: new Date()
		};

		const gameId = await GamesService.saveNewGame(newGame)
			.then(res => {
				return !res.ok
					? res.json().then(e => Promise.reject(e))
					: res.json();
			})
			.then(responsejson => responsejson.id);
		/*Wait until you get the id*/
		this.props.history.push(`/game/${gameId}/game-start-page`);
	}

	render(props) {
		// const wordList = this.state;

		const inputError = this.validateInput();
		const titleError = this.validateTitle();

		return (
			<div className="input-page-container">
				<section>
					<header className="input-instructions">
						<h1 className="input-instructions-text">
							Type Words In The Box
						</h1>
						<p>Separate each word with a comma!</p>
					</header>
					<form>
						<input
							className="title-name"
							placeholder='Example: "Numbers" '
							onChange={e => this.updateTitle(e)}
							required
						/>

						{this.state.title.touched && (
							<ValidationMessage message={titleError} />
						)}

						<div className="input-container">
							<textarea
								className="input-box"
								placeholder="Example: twenty, thirty..."
								aria-label="Type your words here"
								aria-required="true"
								onChange={e => this.setInputStringToArray(e)}
								required
							/>
						</div>
						{this.state.textInput.touched && (
							<ValidationMessage message={inputError} />
						)}
					</form>
					<div className="submit-button-container">
						<button
							className="submit-cancel"
							onClick={() => this.props.history.goBack()}
						>
							Cancel
						</button>

						<button
							className="submit-input"
							type="submit"
							disabled={this.validateInput()}
							onClick={this.handleSubmit}
						>
							Submit
						</button>
					</div>
				</section>
			</div>
		);
	}
}

export default InputPage;
