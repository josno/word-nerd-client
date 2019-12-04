import React, { Component } from 'react';
import './InputPage.css';

class InputPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<section>
					<header class="input-instructions">
						<h1>Type Words into the Box Separated by Commas</h1>
					</header>
					<form>
						<div class="input-container">
							<input class="input-box"></input>
							<div class="preview-box">Preview</div>
						</div>
					</form>
					<div class="submit-button-container">
						<a href="two-game-home-page.html">
							<button class="submit-cancel">Cancel</button>
						</a>
						<a href="four-game-start.html">
							<button class="submit-input">Submit</button>
						</a>
					</div>
				</section>
			</div>
		);
	}
}

export default InputPage;
