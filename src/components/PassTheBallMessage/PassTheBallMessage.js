import React, { Component } from 'react';

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
			<div className="pass-the-ball">
				<h1>{this.state.message}</h1>
			</div>
		);
	}
}

export default PassTheBallMessage;
