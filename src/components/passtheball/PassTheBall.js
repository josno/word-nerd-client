import React, { Component } from 'react';
import Ball from './ball.png';
import './PassTheBall.css';
import Sound from 'react-sound';
import soundfile from './pass-song.mp3';
import PassTheBallMessage from '../PassTheBallMessage/PassTheBallMessage';

class PassTheBall extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null
		};
	}

	render() {
		return (
			<div className="game-play-container">
				<PassTheBallMessage />
				<Sound
					url={soundfile}
					playStatus={Sound.status.PLAYING}
					onFinishedPlaying={this.handleSongFinishedPlaying}
				/>
				<img alt="ball-placeholder" src={Ball} />
			</div>
		);
	}
}

export default PassTheBall;
