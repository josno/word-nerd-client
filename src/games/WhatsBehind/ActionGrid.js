import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WhatsBehindWordItem from "./WhatsBehindWordItem";

import safeMonster from "./monsters/worm-with-wings-friend.svg";
import outMonster from "./monsters/walking-skull-head-monster.svg";

const ActionGrid = ({ count, gridClass }) => {
	const [actionList, setActionList] = useState([]);
	const [start, setStart] = useState(true);

	const makeActionList = () => {
		const list = [];
		const actions = [safeMonster, safeMonster, outMonster];
		for (let i = 1; list.length < 8; i++) {
			let newRandIndex = Math.floor(Math.random() * actions.length);

			list.push(actions[newRandIndex]);
		}

		setActionList([...list]);
	};

	const setRender =
		actionList.length > 0 &&
		actionList.map((item, index) => (
			<WhatsBehindWordItem key={index}>
				<img className={gridClass[index]} src={item} alt='monster' />
			</WhatsBehindWordItem>
		));

	useEffect(() => {
		if (start) {
			makeActionList();
			setStart(false);
		}
		if (count === 8) {
			setTimeout(() => {
				makeActionList();
			}, 1000);
		}
	}, [count, start]);

	return <ActionGridStyles>{setRender}</ActionGridStyles>;
};

const ActionGridStyles = styled.div`
	img {
		width: 80%;
		height: auto;
	}
	height: 100%;
	border: 1px solid red;
	position: absolute;
	width: 100%;
	bottom: 0%;

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
`;

export default ActionGrid;
