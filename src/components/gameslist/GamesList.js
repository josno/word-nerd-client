import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WordContext from '../../WordContext';

class GamesList extends Component {
	static contextType = WordContext;
	render(props) {
		return (
			<div>
				<ul className="list-of-games">
					{this.props.savedGames.length > 0 &&
						this.props.savedGames.map(g => (
							<li
								key={`${g.id}-${g.title}`}
								className="game-info"
							>
								<div className="info-container">
									<h2>{g.title}</h2>
									<h3>
										{new Date(
											g.date_created
										).toLocaleString()}
									</h3>
								</div>

								<div className="button-container">
									<Link to={`/game/${g.id}/game-start-page/`}>
										<button
											className="play-button"
											type="submit"
											onClick={() =>
												this.context.getSavedGameId(
													g.id
												)
											}
										>
											Play
										</button>
									</Link>
									<button
										onClick={() =>
											this.props.handleDelete(g.id)
										}
									>
										Delete
									</button>
								</div>
							</li>
						))}
				</ul>
			</div>
		);
	}
}

export default GamesList;
