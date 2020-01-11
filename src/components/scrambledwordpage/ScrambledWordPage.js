import React, { Component } from 'react';
import './ScrambledWordPage.css';

class ScrambleWordPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: 'Stop!'
		};
	}

	render(props) {
		return (
			<div className="guess-the-word-container">
				<h1 className="pass-the-ball">Say The Word:</h1>
				<p className="scrambled-word">{this.props.shuffledWord}</p>
			</div>
		);
	}
}

export default ScrambleWordPage;
