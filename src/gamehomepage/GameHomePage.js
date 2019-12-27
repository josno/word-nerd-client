import React, { Component } from 'react';
import './GameHomePage.css';
import { Link } from 'react-router-dom';
import WordContext from '../WordContext';
import config from '../config';
import TokenService from '../services/token-service';

class GameHomePage extends Component {
	static contextType = WordContext;
	constructor(props) {
		super(props);
		this.state = {
			savedGames: []
		};
	}

	componentDidMount() {
		//we need a user Id
		fetch(`${config.API_ENDPOINT}/v1/games/`, {
			headers: {
				Authorization: `basic ${TokenService.getAuthToken()} `
			}
		})
			.then(res => res.json())
			.then(responsejson => {
				this.setState({
					savedGames: responsejson
				});
			});
	}

	render(props) {
		const { savedGames, getSavedGameId } = this.state; //deleteSavedGames in App.js & context
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
												{new Date(
													g.date_created
												).toLocaleString()}
											</h3>
										</div>

										<div className="button-container">
											<Link
												to={`/game-start-page/${g.id}`}
											>
												<button
													className="play-button"
													type="submit"
													onClick={() => {
														getSavedGameId(g.id);
													}} //remove onClick
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
