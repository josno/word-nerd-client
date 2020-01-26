import React, { Component } from 'react';
import Ball from './giphy.gif';
import './PassTheBall.css';
import Sound from 'react-sound';
import soundfile from './pass-song.mp3';
import PassTheBallMessage from '../PassTheBallMessage/PassTheBallMessage';

class PassTheBall extends Component {
	render() {
		return (
			<section className="game-play-container">
				<PassTheBallMessage />
				<Sound
					url={soundfile}
					playStatus={Sound.status.PLAYING}
					onFinishedPlaying={this.handleSongFinishedPlaying}
				/>
				<div className="ball-image-container">
					<img
						className="ball-gif"
						alt="ball-placeholder"
						src={Ball}
					/>
				</div>
			</section>
		);
	}
}

export default PassTheBall;
