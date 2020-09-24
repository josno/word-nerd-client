import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import safeMonster from "./monsters/worm-with-wings-friend.svg";
import outMonster from "./monsters/walking-skull-head-monster.svg";
import birdMonster from "./monsters/bird-monster-friend.svg";

const WhatsBehindInstructions = ({ handleClick }) => {
	return (
		<InstructionsStyles>
			<main>
				<img className='title-img' src={birdMonster} alt='title' />
				<h1 className='title'>What's Behind It?</h1>
			</main>
			<section>
				<h1>Instructions</h1>
				<h2>Pick a word and say it out loud.</h2>
			</section>

			<section className='grid-container'>
				<h3 className='one'>If you see</h3>

				<img className='two' src={outMonster} alt={"out monster"} />

				<h3 className='three'>you are out</h3>
				<h3 className='four'>If you see</h3>

				<img className='five' src={safeMonster} alt={"out monster"} />

				<h3 className='six'> you are safe</h3>
			</section>
			<section className='buttons-section'>
				<button className='button flex-center' onClick={() => handleClick()}>
					Start
				</button>
				<Link className='button flex-center' to='/game-type-page'>
					Cancel
				</Link>
			</section>
		</InstructionsStyles>
	);
};

const InstructionsStyles = styled.div`
	@import url("https://fonts.googleapis.com/css2?family=Carter+One&display=swap");
	.title {
		font-family: "Carter One", sans serif;
		position: relative;
		width: 50%;
		margin: 0 auto;
		padding: 40px;
		color: #fdf148;
		background: #33a8c7;
		z-index: 99;
		margin-top: 40px;
	}
	.title-img {
		position: absolute;
		z-index: -1;
		width: 18%;
		transform: scale(1.2) translate(20%, -10%);
	}
	img {
		width: 30%;
		height: auto;
		margin: 0 auto;
	}
	.grid-container {
		display: grid;
		grid-template-columns: 1.4fr 0.2fr 1.4fr;
		grid-template-rows: 0.2fr 1fr 0.2fr;
		gap: 1px 1px;
		grid-template-areas:
			"one . four"
			"two . five"
			"three . six";
	}
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

	.buttons-section {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 50%;
		margin: 0 auto;
	}

	.flex-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.button {
		border: 1px solid black;
		background: white;
		width: 120px;
		height: 50px;
		font-size: 1.2em;
		box-shadow: 3px 3px 10px lightgrey;
		transition: all 0.2s ease-in;
	}

	.button:hover {
		cursor: pointer;
		transform: translateY(-3px) scale(1.1);
		color: #ff206e;
	}

	.button:active {
		cursor: pointer;
		transform: translateY(3px) scale(1) translateY(2px);
		color: #ff206e;
	}
`;

export default WhatsBehindInstructions;
