import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './routes/Homepage/Homepage';
import GameHomePage from './routes/GameHomePage/GameHomePage';
import InputPage from './routes/InputPage/InputPage';
import EditPage from './routes/EditPage/EditPage';
import GameStartPage from './routes/GameStartPage/GameStartPage';
import GuessTheWord from './routes/GuessTheWord/GuessTheWord';
import EndGamePage from './routes/EndGamePage/EndGamePage';
import Navigation from './components/Navigation/Navigation';
import ErrorPage from './routes/ErrorPage/ErrorPage';
import WordContext from './WordContext';
import TokenService from './services/token-service';

class App extends Component {
	static contextType = WordContext;
	constructor(props) {
		super(props);
		this.state = {
			currentGameId: '',
			isLoggedIn: false
		};
	}

	setCurrentGameId = id => {
		this.setState({
			currentGameId: id
		});
	};

	handleLogInState = () => {
		this.setState({
			isLoggedIn: !this.state.isLoggedIn
		});
	};

	componentDidMount() {
		if (TokenService.hasAuthToken()) {
			this.setState({
				isLoggedIn: true
			});
		}
	}

	render() {
		const contextValue = {
			isLoggedIn: this.state.isLoggedIn,
			setCurrentGameId: this.setCurrentGameId,
			currentGameId: this.state.currentGameId,
			handleLogInState: this.handleLogInState
		};
		return (
			<div className="App">
				<WordContext.Provider value={contextValue}>
					<header className="navigation">
						<Navigation />
					</header>
					<Switch>
						{TokenService.hasAuthToken() ? (
							<Route
								exact
								path="/game-home-page"
								render={routeProps => (
									<GameHomePage {...routeProps} />
								)}
							/>
						) : (
							<Redirect to="/" />
						)}

						<Route exact path="/" component={Homepage} />

						{TokenService.hasAuthToken() ? (
							<Route
								exact
								path="/end-game-page"
								render={EndGamePage}
							/>
						) : (
							<Redirect to="/" />
						)}

						{TokenService.hasAuthToken() ? (
							<Route
								exact
								path="/input-page"
								component={InputPage}
							/>
						) : (
							<Redirect to="/" />
						)}

						{TokenService.hasAuthToken() ? (
							<Route
								exact
								path="/game/:gameId/guess-the-word/"
								render={routeProps => (
									<GuessTheWord
										gameId={routeProps.match.params.gameId}
									/>
								)}
							/>
						) : (
							<Redirect to="/" />
						)}

						{TokenService.hasAuthToken() ? (
							<Route
								exact
								path="/game/:gameId/game-start-page/"
								render={routeProps => (
									<GameStartPage
										gameId={routeProps.match.params.gameId}
									/>
								)}
							/>
						) : (
							<Redirect to="/" />
						)}
						{TokenService.hasAuthToken() ? (
							<Route
								exact
								path="/game/:gameId/edit-page/"
								render={routeProps => (
									<EditPage
										gameId={routeProps.match.params.gameId}
										{...routeProps}
									/>
								)}
							/>
						) : (
							<Redirect to="/" />
						)}
						<Route component={ErrorPage} />
					</Switch>
				</WordContext.Provider>
			</div>
		);
	}
}

export default App;
