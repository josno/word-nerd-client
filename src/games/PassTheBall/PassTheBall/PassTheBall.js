import React, { Component } from "react";
import Ball from "./giphy.gif";
import "./PassTheBall.css";
import Sound from "react-sound";
import soundfile from "./pass-song.mp3";
import HeaderMessage from "../../../components/HeaderMessage/HeaderMessage";

class PassTheBall extends Component {
	render() {
		return (
			<section className='game-play-container'>
				<HeaderMessage oldMessage='Start!' newMessage='Pass The Ball' />
				<Sound
					url={soundfile}
					playStatus={Sound.status.PLAYING}
					onFinishedPlaying={this.handleSongFinishedPlaying}
				/>
				<div className='ball-image-container'>
					<img className='ball-gif' alt='ball-placeholder' src={Ball} />
				</div>
			</section>
		);
	}
}

export default PassTheBall;
