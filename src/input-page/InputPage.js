import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './InputPage.css';

class InputPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			preview: [],
			textInput: ''
		};
		this.updatePreview = this.updatePreview.bind(this);
	}

	updatePreview = value => {
		//textInput needs to be push to preview array
		//Preview array needs to be rendered with forEach
	};

	renderPreview;

	render() {
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
								value={this.state.preview}
								onChange={e =>
									this.updatePreview(e.target.value)
								}
							/>
							<div className="preview-box">Preview Goes Here</div>
						</div>
					</form>
					<div className="submit-button-container">
						<Link to="/game-home-page">
							<button className="submit-cancel">Cancel</button>
						</Link>
						<Link to="/game-start-page">
							<button className="submit-input">Submit</button>
						</Link>
					</div>
				</section>
			</div>
		);
	}
}

export default InputPage;
