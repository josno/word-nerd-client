import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './routes/homepage/Homepage';
import GameHomePage from './routes/gamehomepage/GameHomePage';
import InputPage from './routes/input-page/InputPage';
import GameStartPage from './routes/gamestartpage/GameStartPage';
import GuessTheWord from './routes/guesstheword/GuessTheWord';
import EndGamePage from './routes/endgamepage/EndGamePage';
import AnswerPage from './components/answerpage/AnswerPage';
import Navigation from './components/Navigation/Navigation';
import WordContext from './WordContext';
import config from './config';
import TokenService from './services/token-service';
import ColorTest from './components/color-test/color-test';

class App extends Component {
	static contextType = WordContext;
	constructor(props) {
		super(props);
		this.state = {
			currentGameId: '',
			response: ''
		};
	}

	handlePlayButton = id => {
		this.setState({
			currentGameId: id
		});
	};

	saveNewGame = gameObject => {
		/* From submit via input-page then adds to state.savedGames */

		const newList = {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				Authorization: `basic ${TokenService.getAuthToken()}`
			},
			body: JSON.stringify({
				title: gameObject.title,
				word_list: gameObject.word_list,
				date_created: new Date(),
				user_id: gameObject.user_id
			})
		};

		return fetch(`${config.API_ENDPOINT}/v1/games`, newList) //returns result of promises
			.then(res => {
				return !res.ok
					? res.json().then(e => Promise.reject(e))
					: res.json();
			})
			.then(responsejson => responsejson.id);
	};

	render() {
		const { currentWord } = this.state;
		console.log(this.state.currentGameId);

		const contextValue = {
			saveNewGame: this.saveNewGame,
			getSavedGameId: this.handlePlayButton,
			currentGameId: this.state.currentGameId,
			saveUsername: this.saveUsername
		};

		return (
			<div>
				<WordContext.Provider value={contextValue}>
					<Navigation />

					<Route exact path="/" component={Homepage} />
					<Route
						exact
						path="/game-home-page"
						component={GameHomePage}
					/>

					<Route
						exact
						path="/input-page/:user_id"
						render={routeProps => (
							<InputPage
								userId={routeProps.match.params.user_id}
								{...routeProps} //passes all other props like history and location
							/>
						)}
					/>
					<Route
						exact
						path="/end-game-page"
						component={EndGamePage}
					/>
					<Route
						exact
						path="/answer-page"
						render={props => <AnswerPage word={currentWord} />}
					/>

					<Route
						exact
						path="/color-page"
						render={props => <ColorTest word={currentWord} />}
					/>
					<Route
						exact
						path="/game/:gameId/guess-the-word/"
						render={routeProps => (
							<GuessTheWord
								gameId={routeProps.match.params.gameId}
							/>
						)}
					/>
					<Route
						exact
						path="/game/:gameId/game-start-page/"
						render={routeProps => (
							<GameStartPage
								gameId={routeProps.match.params.gameId}
							/>
						)}
					/>
				</WordContext.Provider>
			</div>
		);
	}
}

export default App;
