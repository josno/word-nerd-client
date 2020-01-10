import React, { Component } from 'react';
import Ball from './ball.png';
import './PassTheBall.css';
// import soundfile from './funday.mp3';

class PassTheBall extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startMessage: 'Start!',
			passTheBall: 'Pass The Ball!',
			stopMessage: 'Stop!',
			message: 'Get Ready...'
		};
	}
	componentDidMount() {
		setTimeout(
			() =>
				this.setState({
					message: 'Pass The Ball!'
				}),
			2000
		);
	}

	render(props) {
		// const audio = new Audio(soundfile);
		// audio.play();

		return (
			<div className="game-play-container">
				<h1 className="pass-the-ball">{this.state.message}</h1>

				<img alt="ball-placeholder" src={Ball} />
			</div>
		);
	}
}

export default PassTheBall;
