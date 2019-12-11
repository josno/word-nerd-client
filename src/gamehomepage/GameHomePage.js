import React, { Component } from 'react';
import './GameHomePage.css';
import { Link } from 'react-router-dom';
import WordContext from '../WordContext';

class GameHomePage extends Component {
	static contextType = WordContext;

	render(props) {
		const { savedGames, getSavedGameId } = this.context;
		return (
			<div>
				<section>
					<div className="game-container">
						<h1> Games List </h1>
						<ul className="list-of-games">
							{savedGames.length > 0 &&
								savedGames.map(g => (
									<li
										key={`${g.id}-${g.title}`}
										className="game-info"
									>
										<div className="info-container">
											<h2>{g.title}</h2>
											<h3>
												{g.date_created.toLocaleDateString()}
											</h3>
										</div>

										<div className="button-container">
											<Link
												to={`/game-start-page/${g.game_id}`}
											>
												<button
													className="play-button"
													type="submit"
													onClick={() => {
														getSavedGameId(
															g.game_id
														);
													}}
												>
													Play
												</button>
											</Link>
										</div>
									</li>
								))}
						</ul>

						<Link to="/input-page">
							<button className="create-game-button">
								<h2>Create a Pass the Ball Game</h2>
							</button>
						</Link>
					</div>
				</section>
			</div>
		);
	}
}

export default GameHomePage;
