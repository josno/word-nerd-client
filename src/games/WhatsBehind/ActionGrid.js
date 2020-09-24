import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WhatsBehindWordItem from "./WhatsBehindWordItem";

const ActionGrid = ({ count }) => {
	const [actionList, setActionList] = useState([]);
	const [start, setStart] = useState(true);

	const makeActionList = () => {
		const list = [];
		const actions = ["X", "0", "0"];
		for (let i = 1; list.length < 8; i++) {
			let newRandIndex = Math.floor(Math.random() * actions.length);

			list.push(actions[newRandIndex]);
		}

		setActionList([...list]);
	};

	const setRender =
		actionList.length > 0 &&
		actionList.map((item, index) => (
			<WhatsBehindWordItem key={index}>{item}</WhatsBehindWordItem>
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

export default ActionGrid;
