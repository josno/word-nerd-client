import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const WhatsBehindInstructions = ({ gameId, handleClick }) => {
	return (
		<InstructionsStyles>
			<h1>Instructions</h1>
			<h2>1. Pick a word and say it out loud.</h2>
			<h3>2. Uncover an item under your word</h3>
			<h3>3. If you see X you are out</h3>
			<h3>4. If you see 0 you are safe</h3>
			<button onClick={() => handleClick()}>Start</button>
			<Link to='/game-type-page'>Cancel</Link>
		</InstructionsStyles>
	);
};

const InstructionsStyles = styled.div``;

export default WhatsBehindInstructions;
