import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WhatsBehindInstructions from "./WhatsBehindInstructions";
import WhatsBehindPlayGrid from "./WhatsBehindPlayGrid";

import GamesService from "../../services/api-service";

const WhatsBehind = (props) => {
	const [isOnInstructions, setIsOnInstructions] = useState(true);
	const [words, setWordList] = useState([]);
	useEffect(() => {
		GamesService.getGameContent(props.gameId).then((responsejson) => {
			setWordList([...responsejson.word_list]);
		});
	}, [props.gameId]);

	return (
		<WhatsBehindStyles>
			{isOnInstructions ? (
				<WhatsBehindInstructions
					handleClick={() => setIsOnInstructions(!isOnInstructions)}
					gameId={props.gameId}
				/>
			) : (
				<WhatsBehindPlayGrid list={words} />
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
