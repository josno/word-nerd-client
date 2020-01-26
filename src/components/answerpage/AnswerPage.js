import React from 'react';
import './AnswerPage.css';

export default function AnswerPage(props) {
	return (
		<section className="answer-page-container">
			<header>
				<h1 className="answer-message-text">The word was:</h1>
			</header>
			<p className="answer-word">{props.word}</p>
		</section>
	);
}
