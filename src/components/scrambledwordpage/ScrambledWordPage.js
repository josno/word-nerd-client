import React, { Component } from 'react';
import Sound from 'react-sound';
import boing from './jump-boing.mp3';
import './ScrambledWordPage.css';
import ScrambledMessage from '../ScrambledMessage/ScrambledMessage';

class ScrambleWordPage extends Component {
	render(props) {
		return (
			<section className="scrambled-word-container">
				<Sound
					url={boing}
					playStatus={Sound.status.PLAYING}
					onFinishedPlaying={this.handleSongFinishedPlaying}
				/>
				<ScrambledMessage />
				<p className="scrambled-word">{this.props.shuffledWord}</p>
			</section>
		);
	}
}

export default ScrambleWordPage;
