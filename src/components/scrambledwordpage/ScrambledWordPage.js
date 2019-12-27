import React from 'react';
import './ScrambledWordPage.css';

export default function ScrambledWordPage(props) {
	return (
		<div className="guess-the-word-container">
			<h1 className="pass-the-ball">Say The Word!</h1>
			<p className="scrambled-word">{props.shuffledWord}</p>
		</div>
	);
}
