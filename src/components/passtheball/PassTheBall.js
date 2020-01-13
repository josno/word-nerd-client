import React, { Component } from 'react';
import Ball from './ball.png';
import './PassTheBall.css';
import Sound from 'react-sound';
import soundfile from './funday.mp3';

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
		this.ballTimer = setTimeout(
			() =>
				this.setState({
					message: 'Pass The Ball!'
				}),
			2000
		);
	}

	componentWillUnmount() {
		clearTimeout(this.ballTimer);
	}

	render(props) {
		// const audio = new Audio(soundfile);
		// audio.play();

		return (
			<div className="game-play-container">
				<h1 className="pass-the-ball">{this.state.message}</h1>
				<Sound
					url={soundfile}
					playStatus={Sound.status.PLAYING}
					// onLoading={this.handleSongLoading}
					// playFromPosition={300 /* in milliseconds*/}
					// onPlaying={this.handleSongPlaying}
					// onFinishedPlaying={this.handleSongFinishedPlaying}
				/>
				<img alt="ball-placeholder" src={Ball} />
			</div>
		);
	}
}

export default PassTheBall;
