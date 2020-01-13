import React, { Component } from 'react';
import Sound from 'react-sound';
import boing from './jump-boing.mp3';
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
				<Sound
					url={boing}
					playStatus={Sound.status.PLAYING}
					// onLoading={this.handleSongLoading}
					// playFromPosition={300 /* in milliseconds*/}
					// onPlaying={this.handleSongPlaying}
					// onFinishedPlaying={this.handleSongFinishedPlaying}
				/>
				<h1 className="pass-the-ball">Say The Word:</h1>
				<p className="scrambled-word">{this.props.shuffledWord}</p>
			</div>
		);
	}
}

export default ScrambleWordPage;
