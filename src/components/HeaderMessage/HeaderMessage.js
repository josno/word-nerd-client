import React, { useState, useEffect } from "react";
import "./HeaderMessage.css";

const ScrambledMessage = ({ oldMessage, newMessage }) => {
	const [message, setMessage] = useState(oldMessage);

	useEffect(() => {
		const timer = setTimeout(() => setMessage(newMessage), 1500);
		return () => clearTimeout(timer);
	}, [newMessage]);

	return (
		<header className='scrambled-message'>
			<h1 className='scrambled-message-text'>{message}</h1>
		</header>
	);
};

export default ScrambledMessage;
