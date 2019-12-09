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
			preview: false
		};
		this.updatePreview = this.updatePreview.bind(this);
		this.renderPreview = this.renderPreview.bind(this);
	}

	updatePreview = e => {
		const { value } = e.target;
		/*Create an array and split by comma as user types*/
		const newList = value.split(',').map(i => i.trim());
		this.setState({
			textInput: newList
		});
	};

	renderPreview() {
		this.setState({
			preview: true
		});
	}

	handleSubmit(e) {
		this.context.saveNewWords(this.state.textInput);
		console.log(this.state.textInput);
	}

	render() {
		const { textInput } = this.state;

		return (
			<div>
				<section>
					<header className="input-instructions">
						<h1>Type Words into the Box Separated by Commas</h1>
					</header>
					<form>
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

					{this.state.preview && <Preview word={textInput} />}
					<button
						className="submit-cancel"
						onClick={this.renderPreview}
					>
						Review Words
					</button>
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
