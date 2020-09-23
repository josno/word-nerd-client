import React, { useContext } from "react";
import { Link } from "react-router-dom";
import WordContext from "../../WordContext";
import "./GameTypePage.css";

const GameTypePage = (props) => {
	const context = useContext(WordContext);
	return (
		<div>
			<h1>Select A Game</h1>
			<div className='type-container'>
				<Link to={`/game/${context.currentGameId}/game-start-page`}>
					<div className='title-img-container'>
						<img
							className='title-img'
							src='https://raw.githubusercontent.com/josno/word-nerd-client/master/assets/titlecards/PassTheBall_TitleCard.png'
							alt='pass-the-ball'
						/>
					</div>
				</Link>
				<Link to={`/game/${context.currentGameId}/whats-behind`}>
					<div className='title-img-container'>
						<img className='title-img' src={""} alt='pass-the-ball' />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default GameTypePage;
