import React, { Component } from 'react';
import './GameHomePage.css';
import { Link } from 'react-router-dom';
import WordContext from '../../WordContext';
import config from '../../config';
import GamesList from '../../components/gameslist/GamesList';
import TokenService from '../../services/token-service';
// import GamesService from '../services/api-service';

class GameHomePage extends Component {
	static contextType = WordContext;
	constructor(props) {
		super(props);
		this.state = {
			savedGames: [],
			noGamesSaved: false,
			user_id: ''
		};
	}

	componentDidMount() {
		fetch(`${config.API_ENDPOINT}/v1/games/`, {
			headers: {
				Authorization: `bearer ${TokenService.getAuthToken()} `
			}
		})
			.then(res => res.json())
			.then(responsejson => {
				if (responsejson.length === 0) {
					this.setState({
						noGamesSaved: true
					});
				} else {
					this.setState({
						savedGames: [...responsejson],
						user_id: responsejson[0]['user_id']
					});
				}
			});
	}

	render(props) {
		const { savedGames, user_id } = this.state;

		return (
			<div>
				<section>
					<div className="game-container">
						<h1> Games List </h1>

						{this.state.noGamesSaved === true ? (
							<div className="info-container">
								You have no saved games yet!
							</div>
						) : (
							<GamesList savedGames={savedGames} />
						)}
						<Link to={`/input-page/${user_id}`}>
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
