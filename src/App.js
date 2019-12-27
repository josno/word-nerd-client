import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './routes/homepage/Homepage';
import GameHomePage from './routes/gamehomepage/GameHomePage';
import InputPage from './routes/input-page/InputPage';
import GameStartPage from './routes/gamestartpage/GameStartPage';
import PassTheBall from './routes/passtheball/PassTheBall';
import GuessTheWord from './routes/guesstheword/GuessTheWord';
import EndGamePage from './routes/endgamepage/EndGamePage';
import AnswerPage from './components/answerpage/AnswerPage';
import WordContext from './WordContext';
import config from './config';
import TokenService from './services/token-service';

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

		fetch(`${config.API_ENDPOINT}/v1/games`, newList)
			.then(res => {
				!res.ok ? res.json().then(e => Promise.reject(e)) : res.json();
			})
			.then(responsejson => console.log(responsejson));
	};

	render() {
		const { currentWord } = this.state;
		console.log(this.state);

		const contextValue = {
			saveNewGame: this.saveNewGame,
			getSavedGameId: this.handlePlayButton,
			currentGameId: this.state.currentGameId,
			saveUsername: this.saveUsername
		};

		return (
			<div>
				<nav role="navigation"> nav </nav>
				<WordContext.Provider value={contextValue}>
					<Route exact path="/" component={Homepage} />
					<Route
						exact
						path="/game-home-page"
						component={GameHomePage}
					/>

					<Route
						exact
						path="/pass-the-ball"
						component={PassTheBall}
					/>
					{['/input-page/:user_id'].map(path => (
						<Route
							key={path}
							exact
							path={path}
							render={routeProps => (
								<InputPage
									userId={routeProps.match.params.user_id}
								/>
							)}
						/>
					))}
					<Route
						exact
						path="/guess-the-word"
						component={GuessTheWord}
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
						path="/game-start-page"
						component={GameStartPage}
					/>
				</WordContext.Provider>
			</div>
		);
	}
}

export default App;
