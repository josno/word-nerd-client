import React, { Component } from 'react';
import './InputPage.css';
import Preview from '../../components/Preview/Preview.js';
import GamesService from '../../services/api-service';

class InputPage extends Component {
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
		/*Create an array and split by comma as user types 
		so students can review the words*/

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

	async handleSubmit(e) {
		const { title, wordList } = this.state;
		const newGame = {
			title: title,
			word_list: wordList,
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
		const { wordList } = this.state;

		return (
			<div className="input-page-container">
				<section>
					<header className="input-instructions">
						<h1 className="input-instructions-text">
							Type Words In The Box
						</h1>
						<p>Separate them by commas!</p>
					</header>
					<form>
						<input
							className="title-name"
							placeholder='Example: "Numbers" '
							onChange={e => this.updateTitle(e)}
							required
						/>
						<div className="input-container">
							<textarea
								className="input-box"
								placeholder="Example: twenty, thirty..."
								aria-label="Type your words here"
								aria-required="true"
								onChange={e => this.updatePreview(e)}
								required
							/>
						</div>
					</form>
					<h2>Review Words</h2>
					{wordList.map((word, index) => (
						<Preview key={index} word={word} />
					))}
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
							onClick={e => this.handleSubmit(e)}
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
