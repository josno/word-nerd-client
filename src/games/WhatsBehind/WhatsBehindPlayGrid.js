import React, { useEffect, useState } from "react";
import styled from "styled-components";

import WhatsBehindWordItem from "./WhatsBehindWordItem";
import ActionGrid from "./ActionGrid";

const colors = [
	"#33a8c7",
	"#52e3e1",
	"#a0e426",
	"#fdf148",
	"#ffab00",
	"#f77976",
	"#f050ae",
	"#d883ff",
];

const WhatsBehindPlayGrid = ({ list }) => {
	const [randomWordList, setRandomWordList] = useState([]);
	const [update, setUpdate] = useState(false);
	const [colorList, setColorList] = useState(colors);
	const [counter, setCounter] = useState(0);
	const [reset, setReset] = useState(false);

	const randomize = (wordList, state) => {
		let randomizedList = [];

		for (let i = 1; randomizedList.length < 8; i++) {
			let newRandIndex = Math.floor(Math.random() * wordList.length);

			if (randomizedList.includes(wordList[newRandIndex])) {
				newRandIndex = Math.floor(Math.random() * wordList.length);
			} else {
				randomizedList.push(wordList[newRandIndex]);
			}
		}

		return randomizedList;
	};

	const addToCounter = () => {
		setCounter(counter + 1);
	};

	useEffect(() => {
		if (!update || counter === 8) {
			const newWords = randomize(list);
			setRandomWordList([...newWords]);
			const newColors = randomize(colorList);
			setColorList([...newColors]);
			setUpdate(true);
			setCounter(0);
		}
	}, [colorList, counter, list, update]);

	const setRenderList =
		randomWordList.length > 0 &&
		colors.map((color, index) => (
			<WhatsBehindWordItem
				addToCounter={() => addToCounter()}
				background={color}
				className={index + 1}
			>
				{randomWordList[index]}
			</WhatsBehindWordItem>
		));

	const render = randomWordList.length > 0 && (
		<>
			<WordGrid>{setRenderList}</WordGrid>
			<ActionGrid update={update} />
		</>
	);

	return render;
};

const WordGrid = styled.div`
	position: relative;
	z-index: 99;
	height: 100%;
	border: 1px solid red;

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
		background: #52e3e1;
	}
	.two {
		grid-area: two;
		background: #fdf148;
	}
	.three {
		grid-area: three;
		background: #9336fd;
	}
	.four {
		grid-area: four;
		background: #ffab00;
	}
	.five {
		grid-area: five;
		background: #a0e426;
	}
	.six {
		grid-area: six;
		background: #f050ae;
	}
	.seven {
		grid-area: seven;
		background: #33a8c7;
	}
	.eight {
		grid-area: eight;
		background: #d883ff;
	}
`;

export default WhatsBehindPlayGrid;
