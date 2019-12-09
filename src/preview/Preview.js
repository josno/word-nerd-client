import React, { Component } from 'react';
import './Preview.css';

class Preview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageNumber: 1,
			renderedWord: ''
		};
	}

	componentDidMount() {
		//information here
	}

	render() {
		const { word } = this.props;
		const formattedWords = word.map((word, index) => (
			<p className="preview-words">
				<li key={index}>{word}</li>
			</p>
		));
		return <div className="preview-box">{formattedWords}</div>;
	}
}

export default Preview;
