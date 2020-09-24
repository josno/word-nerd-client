import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import WhatsBehindWordItem from "./WhatsBehindWordItem";
import ActionGrid from "./ActionGrid";

const colors = [
	"#33a8c7",
	"#a0e426",
	"#fdf148",
	"#ffab00",
	"#f050ae",
	"#d883ff",
	"#52e3e1",
	"#f77976",
];

const gridClass = [
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
];

const WhatsBehindPlayGrid = ({
	list,
	update,
	addToCounter,
	resetCounter,
	count,
}) => {
	const [colorsList, setColorsList] = useState(colors);

	const randomizeColors = (list) => {
		let randomizedList = [];

		for (let i = 1; randomizedList.length < 8; i++) {
			let newRandIndex = Math.floor(Math.random() * list.length);

			if (randomizedList.includes(list[newRandIndex])) {
				newRandIndex = Math.floor(Math.random() * list.length);
			} else {
				randomizedList.push(list[newRandIndex]);
			}
		}

		setColorsList([...randomizedList]);
	};

	useEffect(() => {
		if (count === 8) {
			setTimeout(() => {
				randomizeColors(colors);
			});
		}
	}, [count]);

	const nextButton = (
		<ButtonStyles
			right={"0%"}
			borderRadius={"10px 0px 00px 10px"}
			onClick={() => resetCounter()}
		>
			Next
		</ButtonStyles>
	);

	const cancelButton = (
		<ButtonStyles left={"0%"} borderRadius={"0px 10px 10px 0px"}>
			<Link class='cancel-button' to={"/game-home-page"}>
				Stop
			</Link>
		</ButtonStyles>
	);

	const setRenderList =
		list.length > 0 &&
		list.map((item, index) => (
			<WhatsBehindWordItem
				key={index}
				addToCounter={() => addToCounter()}
				background={colorsList[index]}
				className={gridClass[index]}
				update={update}
				count={count}
			>
				{item}
			</WhatsBehindWordItem>
		));

	const render = list.length > 0 && (
		<>
			<WordGrid>{setRenderList}</WordGrid>
			<ActionGrid gridClass={gridClass} count={count} />
			{nextButton}
			{cancelButton}
		</>
	);

	return render;
};

const ButtonStyles = styled.button`
	position: absolute;
	z-index: 101;
	bottom: 0%;
	right: ${(props) => props.right};
	left: ${(props) => props.left};
	background: white;
    border: none;
    padding: 10px;
    font-size: 0.8em;
    border-radius: ${(props) => props.borderRadius}
}
`;

const WordGrid = styled.div`
	position: relative;
	z-index: 99;
	height: 100%;

	.border {
		border: 1px solid blue;
	}

	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr;
	gap: 1px 1px;
	grid-template-areas:
		"one five"
		"two six"
		"three seven"
		"four eight";
	.one {
		grid-area: one;
	}
	.two {
		grid-area: two;
	}
	.three {
		grid-area: three;
	}
	.four {
		grid-area: four;
	}
	.five {
		grid-area: five;
	}
	.six {
		grid-area: six;
	}
	.seven {
		grid-area: seven;
	}
	.eight {
		grid-area: eight;
	}

	.cancel-button {
	}
`;

export default WhatsBehindPlayGrid;
