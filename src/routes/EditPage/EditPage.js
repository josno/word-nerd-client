import React, { Component } from 'react';
import './EditPage.css';
import ValidationMessage from '../../components/ValidationMessage/ValidationMessage';
import GamesService from '../../services/api-service';

class EditPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wordList: [],
			title: '',
			updatedTitle: false,
			updatedInput: false
		};
		this.validateTitle = this.validateTitle.bind(this);
		this.validateInput = this.validateInput.bind(this);
		this.updateInput = this.updateInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	updateInput(text) {
		this.setState({
			wordList: text,
			updatedInput: true
		});
	}

	updateTitle(text) {
		this.setState({
			title: text,
			updatedTitle: true
		});
	}

	validateInput() {
		const wordInput = this.state.wordList.toString();

		const invalidChar = wordInput.match(/[^a-zA-Z,\s]/g);

		if (invalidChar) {
			return 'Type only letters please.';
		} else {
			return '';
		}
	}

	validateTitle() {
		const titleInput = this.state.title;
		const invalidChar = titleInput.match(/[^a-zA-Z,\s]/g);

		if (invalidChar) {
			return 'Type only letters please.';
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		const { title, wordList } = this.state;

		const wordListArray =
			typeof wordList !== 'string'
				? wordList
				: wordList.split(',').map(i => i.trim());

		const newGame = {
			title: title,
			word_list: wordListArray
		};

		GamesService.updateGame(newGame, this.props.gameId).then(response =>
			this.props.history.push(`/game-home-page`)
		);
	}

	componentDidMount() {
		GamesService.getGameContent(this.props.gameId).then(responsejson => {
			const words = [...responsejson.word_list].join(', ');
			this.setState({
				wordList: words,
				title: responsejson.title
			});
		});
	}

	render(props) {
		const titleError = this.validateTitle();
		const inputError = this.validateInput();

		return (
			<div>
				<section>
					<header className="input-instructions">
						<h1>Type Words into the Box Separated by Commas</h1>
					</header>
					<form>
						<input
							className="title-name"
							value={this.state.title}
							onChange={e => this.updateTitle(e.target.value)}
							required
						/>

						{this.state.updatedTitle && (
							<ValidationMessage message={titleError} />
						)}
						<div className="input-container">
							<textarea
								className="input-box"
								aria-required="true"
								value={this.state.wordList}
								onChange={e => this.updateInput(e.target.value)}
								required
							/>
						</div>

						{this.state.updatedInput && (
							<ValidationMessage message={inputError} />
						)}
					</form>
					<div className="submit-button-container">
						<button
							aria-label="cancel"
							className="submit-cancel"
							onClick={() => this.props.history.goBack()}
						>
							Cancel
						</button>

						<button
							aria-label="update"
							className="submit-input"
							type="submit"
							disabled={
								this.validateInput() || this.validateTitle()
							}
							onClick={this.handleSubmit}
						>
							Update
						</button>
					</div>
				</section>
			</div>
		);
	}
}

export default EditPage;
