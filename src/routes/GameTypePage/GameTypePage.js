import React, { useState, useEffect } from "react";
import "./GameTypePage.css";

const GameTypePage = (props) => {
	return (
		<div>
			<h1>Select A Game</h1>
			<div className='type-container'>
				<div className='title-img-container'>
					<img
						className='title-img'
						src='https://raw.githubusercontent.com/josno/word-nerd-client/master/assets/titlecards/PassTheBall_TitleCard.png'
						alt='pass-the-ball'
					/>
				</div>
			</div>
		</div>
	);
};

export default GameTypePage;
