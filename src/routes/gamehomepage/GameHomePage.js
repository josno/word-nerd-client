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
			noGamesSaved: false,
			error: null
		};
	}

	deleteSavedGame = gameId => {
		GamesService.deleteGame(gameId)
			.then(response => {
				GamesService.getUserGames().then(responsejson => {
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
			})
			.catch(res => {
				this.setState({ error: res.error });
			});
	};

	componentDidMount() {
		GamesService.getUserGames()
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
			})
			.catch(res => {
				this.setState({ error: res.error });
			});
	}

	render(props) {
		const { savedGames } = this.state;

		return (
			<main className="game-container">
				<header>
					<h1 className="games-list-title"> Games List </h1>
				</header>
				<section>
					{this.state.noGamesSaved ? (
						<div className="no-games-message">
							You have no saved games yet!
						</div>
					) : (
						<GamesList
							handleDelete={this.deleteSavedGame}
							savedGames={savedGames}
						/>
					)}
				</section>
				<div className="error-message">{this.state.error}</div>
				<section>
					<Link to={`/input-page`}>
						<button
							aria-label="create"
							className="create-game-button"
						>
							Create a Pass the Ball Game
						</button>
					</Link>
				</section>
			</main>
		);
	}
}

export default GameHomePage;
