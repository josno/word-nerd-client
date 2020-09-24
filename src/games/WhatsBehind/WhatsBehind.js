import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import WhatsBehindInstructions from "./WhatsBehindInstructions";
import WhatsBehindPlayGrid from "./WhatsBehindPlayGrid";

import GamesService from "../../services/api-service";

const WhatsBehind = (props) => {
	const [isOnInstructions, setIsOnInstructions] = useState(true);
	const [wordList, setWordList] = useState([]);
	const [randomWordList, setRandomWordList] = useState([]);
	const [counter, setCounter] = useState(0);
	const [reset, hitReset] = useState(false);

	const randomize = (wordList) => {
		let randomizedList = [];

		for (let i = 1; randomizedList.length < 8; i++) {
			let newRandIndex = Math.floor(Math.random() * wordList.length);

			if (randomizedList.includes(wordList[newRandIndex])) {
				newRandIndex = Math.floor(Math.random() * wordList.length);
			} else {
				randomizedList.push(wordList[newRandIndex]);
			}
		}

		setRandomWordList([...randomizedList]);
	};

	useEffect(() => {
		GamesService.getGameContent(props.gameId).then((responsejson) => {
			setWordList([...responsejson.word_list]);
			randomize(responsejson.word_list);
		});
	}, [props.gameId]);

	const updateCounter = () => {
		setCounter(counter + 1);
		if (counter === 7) {
			setTimeout(() => {
				randomize(wordList);

				setCounter(0);
			}, 500);
		}
	};

	return (
		<WhatsBehindStyles>
			{isOnInstructions ? (
				<WhatsBehindInstructions
					handleClick={() => setIsOnInstructions(!isOnInstructions)}
					gameId={props.gameId}
				/>
			) : (
				<WhatsBehindPlayGrid
					count={counter}
					addToCounter={updateCounter}
					list={randomWordList}
				/>
			)}
		</WhatsBehindStyles>
	);
};

const WhatsBehindStyles = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	border: 1px solid black;
`;

export default WhatsBehind;
