import React, { useState, useEffect } from "react";
import styled from "styled-components";

const WhatsBehindWordItem = (props) => {
	const [opacity, setOpacity] = useState(1);

	const updateBox = () => {
		setOpacity(0);
		props.addToCounter();
	};

	return (
		<ItemStyles
			onClick={() => updateBox()}
			background={props.background}
			className={props.className}
			opacity={opacity}
		>
			<h1>{props.children}</h1>
		</ItemStyles>
	);
};

const ItemStyles = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;

	:hover {
		cursor: pointer;
	}
	list-style: none;
	background: ${(props) => props.background};
	opacity: ${(props) => props.opacity};

	transition: all 0.5s ease-in-out;
`;

export default WhatsBehindWordItem;
