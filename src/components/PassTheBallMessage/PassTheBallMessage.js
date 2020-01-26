import React, { Component } from 'react';
import './PassTheBallMessage.css';

class PassTheBallMessage extends Component {
	constructor(props) {
		super(props);
		this.state = { message: 'Start' };
	}

	componentDidMount() {
		this.ballTimer = setTimeout(
			() =>
				this.setState({
					message: 'Pass The Ball!'
				}),
			1500
		);
	}

	componentWillUnmount() {
		clearTimeout(this.ballTimer);
	}

	render() {
		return (
			<header className="pass-the-ball">
				<h1 className="pass-the-ball-text">{this.state.message}</h1>
			</header>
		);
	}
}

export default PassTheBallMessage;
