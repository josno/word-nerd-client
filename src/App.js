import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./routes/Homepage/Homepage";
import GameHomePage from "./routes/GameHomePage/GameHomePage";
import GameTypePage from "./routes/GameTypePage/GameTypePage";
import InputPage from "./routes/InputPage/InputPage";
import EditPage from "./routes/EditPage/EditPage";
import GameStartPage from "./games/PassTheBall/GameStartPage/GameStartPage";
import GuessTheWord from "./games/PassTheBall/GuessTheWord/GuessTheWord";
import EndGamePage from "./routes/Endgamepage/EndGamePage";
import Navigation from "./components/Navigation/Navigation";
import ErrorPage from "./routes/ErrorPage/ErrorPage";
import WordContext from "./WordContext";
import WhatsBehind from "./games/WhatsBehind/WhatsBehind";
import TokenService from "./services/token-service";

const App = () => {
	const [currentGameId, setCurrentGameId] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogInState = () => {
		setIsLoggedIn(!isLoggedIn);
	};

	const setGameId = (id) => {
		setCurrentGameId(id);
	};

	useEffect(() => {
		if (TokenService.hasAuthToken()) {
			setIsLoggedIn(true);
		}
	}, []);

	const contextValue = {
		isLoggedIn: isLoggedIn,
		setCurrentGameId: setGameId,
		currentGameId: currentGameId,
		handleLogInState: handleLogInState,
	};

	return (
		<div className='App'>
			<WordContext.Provider value={contextValue}>
				<header className='navigation'>
					<Navigation />
				</header>
				<Switch>
					<Route exact path='/' component={Homepage} />

					{TokenService.hasAuthToken() ? (
						<Route
							exact
							path='/game-home-page'
							render={(routeProps) => <GameHomePage {...routeProps} />}
						/>
					) : (
						<Redirect to='/' />
					)}

					{TokenService.hasAuthToken() ? (
						<Route
							exact
							path='/game-type-page'
							render={(routeProps) => <GameTypePage {...routeProps} />}
						/>
					) : (
						<Redirect to='/' />
					)}

					{TokenService.hasAuthToken() ? (
						<Route exact path='/end-game-page' render={EndGamePage} />
					) : (
						<Redirect to='/' />
					)}

					{TokenService.hasAuthToken() ? (
						<Route exact path='/input-page' component={InputPage} />
					) : (
						<Redirect to='/' />
					)}

					{TokenService.hasAuthToken() ? (
						<Route
							exact
							path='/game/:gameId/guess-the-word/'
							render={(routeProps) => (
								<GuessTheWord gameId={routeProps.match.params.gameId} />
							)}
						/>
					) : (
						<Redirect to='/' />
					)}

					{TokenService.hasAuthToken() ? (
						<Route
							exact
							path='/game/:gameId/whats-behind/'
							render={(routeProps) => (
								<WhatsBehind gameId={routeProps.match.params.gameId} />
							)}
						/>
					) : (
						<Redirect to='/' />
					)}

					{TokenService.hasAuthToken() ? (
						<Route
							exact
							path='/game/:gameId/game-start-page/'
							render={(routeProps) => (
								<GameStartPage gameId={routeProps.match.params.gameId} />
							)}
						/>
					) : (
						<Redirect to='/' />
					)}
					{TokenService.hasAuthToken() ? (
						<Route
							exact
							path='/game/:gameId/edit-page/'
							render={(routeProps) => (
								<EditPage
									gameId={routeProps.match.params.gameId}
									{...routeProps}
								/>
							)}
						/>
					) : (
						<Redirect to='/' />
					)}
					<Route component={ErrorPage} />
				</Switch>
			</WordContext.Provider>
		</div>
	);
};

export default App;
