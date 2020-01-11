import React, { Component } from 'react';
import './GameHomePage.css';
import { Link } from 'react-router-dom';
import WordContext from '../../WordContext';
import GamesList from '../../components/GamesList/GamesList';
import GamesService from '../../services/api-service';

class GameHomePage extends Component {
	static contextType = WordContext;
	constructor(props) {
		super(props);
		this.state = {
			savedGames: [],
			noGamesSaved: false
		};
	}

	deleteSavedGame = gameId => {
		GamesService.deleteGame(gameId).then(res => {
			if (!res.ok) {
				res.json().then(e => Promise.reject(e));
			}

			GamesService.getUserGames()
				.then(res => res.json())
				.then(responsejson => {
					if (responsejson.length === 0) {
						this.setState({
							noGamesSaved: true
						});
					} else {
						this.setState({
							savedGames: [...responsejson]
						});
					}
				});
		});
	};

	componentDidMount() {
		GamesService.getUserGames()
			.then(res => res.json())
			.then(responsejson => {
				if (responsejson.length === 0) {
					this.setState({
						noGamesSaved: true
					});
				} else {
					this.setState({
						savedGames: [...responsejson]
					});
				}
			});
	}

	render(props) {
		const { savedGames } = this.state;

		return (
			<div>
				<section>
					<div className="game-container">
						<h1> Games List </h1>

						{this.state.noGamesSaved ? (
							<div className="info-container">
								You have no saved games yet!
							</div>
						) : (
							<GamesList
								handleDelete={this.deleteSavedGame}
								savedGames={savedGames}
							/>
						)}
						<Link to={`/input-page`}>
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
