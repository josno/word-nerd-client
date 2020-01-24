import React from 'react';
import './ValidationMessage.css';

export default function ValidationMessage(props) {
	return (
		<div className="validation-message-box">
			<p className="validation-message">{props.message}</p>
		</div>
	);
}
