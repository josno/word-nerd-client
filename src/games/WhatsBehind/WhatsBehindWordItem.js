import React, { useState, useEffect } from "react";
import styled from "styled-components";

const WhatsBehindWordItem = ({
	className,
	background,
	addToCounter,
	children,
	count,
}) => {
	const [display, setDisplay] = useState("flex");
	const [opacity, setOpacity] = useState(1);

	const updateBox = () => {
		setOpacity(0);
		setTimeout(() => {
			setDisplay("none");
		}, 500);

		addToCounter();
	};

	useEffect(() => {
		if (count === 8) {
			setTimeout(() => {
				setDisplay("flex");
				setOpacity(1);
			}, 500);
		}
	}, [count]);

	return (
		<ItemStyles
			onClick={() => updateBox()}
			background={background}
			className={className}
			opacity={opacity}
			display={display}
		>
			<h1>{children}</h1>
		</ItemStyles>
	);
};

const ItemStyles = styled.li`
	display: ${(props) => props.display};
	justify-content: center;
	align-items: center;

	:hover {
		cursor: pointer;
	}
	list-style: none;
	background: ${(props) => props.background};
	opacity: ${(props) => props.opacity};

	transition: all 0.25s ease-out;

	h1 {
		animation: fadeIn 0.2s;
		transition: all 0.25s ease-in;
	}
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
`;

export default WhatsBehindWordItem;
