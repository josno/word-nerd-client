import React from 'react';
import './AnswerPage.css';

export default function AnswerPage(props) {
	return (
		<div className="answer-page-container">
			<h1 className="answer-message-text">The word was:</h1>
			<p className="answer-word">{props.word}</p>
		</div>
	);
}
