import React, { Component } from 'react';
import Ball from './ball.png';
import './PassTheBall.css';
// import soundfile from './funday.mp3';

class PassTheBall extends Component {
	// componentDidMount() {}
	render(props) {
		// const audio = new Audio(soundfile);
		// audio.play();
		return (
			<div className="game-play-container">
				<nav role="navigation">nav</nav>
				<h1 className="pass-the-ball">Pass The Ball!</h1>

				<img alt="ball-placeholder" src={Ball} />
			</div>
		);
	}
}

export default PassTheBall;
