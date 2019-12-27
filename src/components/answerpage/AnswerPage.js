import React from 'react';
import { Link } from 'react-router-dom';
import './AnswerPage.css';

export default function AnswerPage(props) {
	return (
		<div className="answer-page-container">
			<h1 className="pass-the-ball">The word was:</h1>
			<p className="scrambled-word">{props.word}</p>
		</div>
	);
}
