import React from 'react';
import './Preview.css';

export default function Preview(props) {
	return (
		<div className="preview-box">
			<li className="preview-words">{props.word}</li>
		</div>
	);
}
