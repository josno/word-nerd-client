import React, { Component } from 'react';
import './EditPage.css';
import GamesService from '../../services/api-service';

class EditPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			textInput: '',
			wordList: [],
			title: ''
		};
		this.handleUpdate = this.handleUpdate.bind(this);
		this.updateWords = this.updateWords.bind(this);
	}

	updateWords(text) {
		this.setState({
			wordList: text
		});
	}

	updateTitle(text) {
		this.setState({
			title: text
		});
	}

	handleUpdate(e) {
		const { value } = e.target;

		this.setState({
			title: value
		});
	}

	handleSubmit(e) {
		const { title, wordList } = this.state;

		const wordListArray =
			typeof wordList !== 'string'
				? wordList
				: wordList.split(',').map(i => i.trim());

		console.log(typeof wordListArray);
		const newGame = {
			title: title,
			word_list: wordListArray
		};

		GamesService.updateGame(newGame, this.props.gameId);

		this.props.history.push(`/game-home-page`);
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
						/>
						<div className="input-container">
							<textarea
								className="input-box"
								aria-label="Type your words here"
								aria-required="true"
								value={this.state.wordList}
								onChange={e => this.updateWords(e.target.value)}
							/>
						</div>
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
							onClick={e => this.handleSubmit(e.target.value)}
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
