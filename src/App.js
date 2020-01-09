import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './routes/Homepage/Homepage';
import GameHomePage from './routes/GameHomePage/GameHomePage';
import InputPage from './routes/InputPage/InputPage';
import GameStartPage from './routes/GameStartPage/GameStartPage';
import GuessTheWord from './routes/GuessTheWord/GuessTheWord';
import EndGamePage from './routes/EndGamePage/EndGamePage';
import Navigation from './components/Navigation/Navigation';
import WordContext from './WordContext';
import config from './config';
import TokenService from './services/token-service';
import ApiService from './services/api-service';
// import ColorTest from './components/color-test/color-test';

class App extends Component {
	static contextType = WordContext;
	constructor(props) {
		super(props);
		this.state = {
			currentGameId: '',
			response: '',
			isLoggedIn: false,
			isLoggedOut: false
		};
	}

	handlePlayButton = id => {
		this.setState({
			currentGameId: id
		});
	};

	handleLogInState = () => {
		this.setState({
			isLoggedIn: true
		});
	};

	handleLogoutState = () => {
		this.setState({
			isLoggedOut: true
		});
	};

	deleteSavedGame = gameId => {
		ApiService.deleteGame(gameId).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
		this.setState({
			isLoggedOut: false
		});
	};

	render() {
		const contextValue = {
			isLoggedIn: this.state.isLoggedIn,
			isLoggedOut: this.state.isLoggedOut,
			getSavedGameId: this.handlePlayButton,
			currentGameId: this.state.currentGameId,
			saveUsername: this.saveUsername,
			handleLogInState: this.handleLogInState,
			handleLogoutState: this.handleLogoutState,
			deleteSavedGame: this.deleteSavedGame
		};

		return (
			<div className="App">
				<WordContext.Provider value={contextValue}>
					<header className="navigation">
						<Navigation />
					</header>

					<Route exact path={'/'} component={Homepage} />
					<Route
						exact
						path={'/game-home-page'}
						component={GameHomePage}
					/>

					<Route
						exact
						path={'/input-page/:user_id'}
						render={routeProps => (
							<InputPage
								userId={routeProps.match.params.user_id}
								{...routeProps} //passes all other props like history and location
							/>
						)}
					/>
					<Route
						exact
						path={'/end-game-page'}
						component={EndGamePage}
					/>
					<Route
						exact
						path={'/game/:gameId/guess-the-word/'}
						render={routeProps => (
							<GuessTheWord
								gameId={routeProps.match.params.gameId}
							/>
						)}
					/>
					<Route
						exact
						path={'/game/:gameId/game-start-page/'}
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
