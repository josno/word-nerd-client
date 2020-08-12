import React, { useContext } from "react";
import { Link } from "react-router-dom";
import WordContext from "../../WordContext";
import "./GamesList.css";

const GamesList = (props) => {
	const context = useContext(WordContext);

	const formatDate = (date) => {
		const formattedDate = new Date(date).toLocaleString().split(",")[0];

		const created = "Created:";
		return created + " " + formattedDate;
	};

	return (
		<div className='game-list-container'>
			<ul className='list-of-games'>
				{props.savedGames.length > 0 &&
					props.savedGames.map((g) => (
						<li key={`${g.id}-${g.title}`} className='game-info'>
							<div className='info-container'>
								<h2 className='info-text'>{g.title}</h2>
								<h3 className='info-text'>{formatDate(g.date_created)}</h3>
							</div>

							<div className='button-container'>
								<Link to={`/game/${g.id}/edit-page`} className='game-link'>
									<button
										aria-label='edit'
										className='button-style'
										type='submit'
										onClick={() => context.setCurrentGameId(g.id)}
									>
										Edit
									</button>
								</Link>
								<Link className='game-link' to={`/game-type-page`}>
									<button
										aria-label='play'
										className='button-style'
										type='submit'
										onClick={() => context.setCurrentGameId(g.id)}
									>
										Play
									</button>
								</Link>

								<button
									aria-label='delete'
									className='button-style game-link'
									onClick={() => props.handleDelete(g.id)}
								>
									Delete
								</button>
							</div>
						</li>
					))}
			</ul>
		</div>
	);
};

export default GamesList;
