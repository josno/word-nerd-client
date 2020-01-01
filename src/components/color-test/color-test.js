import React, { Component } from 'react';
import ball from './giphy.gif';
import './color-test.css';

class ColorTest extends Component {
	state = {};
	render() {
		return (
			<div className="color-container">
				<h1 className="font-test">Pass The Ball!</h1>{' '}
				<img className="ball-gif" alt="ball-placeholder" src={ball} />
			</div>
		);
	}
}

export default ColorTest;
