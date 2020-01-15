import React, { Component } from 'react';
import Sound from 'react-sound';
import boing from './jump-boing.mp3';
import './ScrambledWordPage.css';
import ScrambledMessage from '../ScrambledMessage/ScrambledMessage';

class ScrambleWordPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null
		};
	}

	render(props) {
		return (
			<div className="guess-the-word-container">
				<Sound
					url={boing}
					playStatus={Sound.status.PLAYING}
					onFinishedPlaying={this.handleSongFinishedPlaying}
				/>
				<ScrambledMessage />
				<p className="scrambled-word">{this.props.shuffledWord}</p>
			</div>
		);
	}
}

export default ScrambleWordPage;
