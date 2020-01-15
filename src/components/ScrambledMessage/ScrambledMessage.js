import React, { Component } from 'react';

class ScrambledMessage extends Component {
	constructor(props) {
		super(props);
		this.state = { message: 'Stop!' };
	}

	componentDidMount() {
		this.ballTimer = setTimeout(
			() =>
				this.setState({
					message: 'Say the word:'
				}),
			1500
		);
	}

	componentWillUnmount() {
		clearTimeout(this.ballTimer);
	}

	render() {
		return (
			<div className="scrambled-message">
				<h1>{this.state.message}</h1>
			</div>
		);
	}
}

export default ScrambledMessage;
