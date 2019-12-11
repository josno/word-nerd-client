import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './homepage/Homepage';
import GameHomePage from './gamehomepage/GameHomePage';
import InputPage from './input-page/InputPage';
import GameStartPage from './gamestartpage/GameStartPage';
import PassTheBall from './passtheball/PassTheBall';
import GuessTheWord from './guesstheword/GuessTheWord';
import EndGamePage from './endgamepage/EndGamePage';
import AnswerPage from './answerpage/AnswerPage';
import WordContext from './WordContext';
import STORE from './store/STORE';

class App extends Component {
	static contextType = WordContext;
	constructor(props) {
		super(props);
		this.state = {
			savedGames: [],
			inputWords: [],
			currentGameId: ''
		};
		this.saveNewGame = this.saveNewGame.bind(this);
	}

	componentDidMount() {
		this.setState({
			savedGames: [...STORE.savedGames]
		});
	}

	handlePlayButton = id => {
		this.setState({
			currentGameId: id
		});
	};

	saveNewGame = list => {
		console.log(list);
		this.setState({
			savedGames: [...this.state.savedGames, list]
		});
	};

	// updateNewWords(array) {
	// 	const newWords = array;

	// 	this.setState({
	// 		//add the words, not array because it's already formatted as array
	// 		inputWords: [...this.state.inputWords, ...newWords],
	// 		savedGames: [...STORE.savedGames]
	// 	});
	// }

	render() {
		const contextValue = {
			savedGames: this.state.savedGames,
			inputWords: this.state.inputWords,
			saveNewWords: this.saveNewGame,
			getSavedGameId: this.handlePlayButton,
			currentGameId: this.state.currentGameId
		};
		console.log(this.state);
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
					<Route exact path="/input-page" component={InputPage} />
					<Route
						exact
						path="/pass-the-ball"
						component={PassTheBall}
					/>
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
					<Route exact path="/answer-page" component={AnswerPage} />
					{['/game-start-page', '/game-start-page/:game_id'].map(
						path => (
							<Route
								key={path}
								exact
								path={path}
								render={routeProps => (
									<GameStartPage
										gameId={routeProps.match.params.gameId}
									/>
								)}
							/>
						)
					)}
					{/* <Route
						path={'/game-start-page' | '/game-start-page/:game_id'}
						component={GameStartPage}
					/> */}
				</WordContext.Provider>
			</div>
		);
	}
}

export default App;
