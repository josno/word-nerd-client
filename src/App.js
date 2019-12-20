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
import config from './config';

class App extends Component {
	static contextType = WordContext;
	constructor(props) {
		super(props);
		this.state = {
			savedGames: [],
			currentGameId: '',
			currentWord: '',
			filteredList: []
		};
		this.makeFilteredList = this.makeFilteredList.bind(this);
	}

	componentDidMount() {
		fetch(`${config.API_ENDPOINT}/v1/games`)
			.then(res => res.json())
			.then(responsejson => {
				this.setState({
					savedGames: responsejson
				});
			});
	}

	handlePlayButton = id => {
		this.setState({
			currentGameId: id
		});
	};

	makeFilteredList(string, list) {
		const newList = list.filter(item => item !== string);
		// console.log(newList);
		this.setState({
			filteredList: [...newList]
		});
	}

	saveNewGame = gameObject => {
		this.setState({
			savedGames: [...this.state.savedGames, gameObject]
		});
		/* From submit via input-page then adds to state.savedGames */
	};

	getCurrentWord = string => {
		this.setState({
			currentWord: string
		});
		/* get the current played word from guess-the-word to render in answer page */
	};

	render() {
		const { currentWord } = this.state;
		console.log(this.state);

		const contextValue = {
			savedGames: this.state.savedGames,
			saveNewGame: this.saveNewGame,
			getSavedGameId: this.handlePlayButton,
			currentGameId: this.state.currentGameId,
			currentWord: this.state.currentWord,
			getCurrentWord: this.getCurrentWord,
			filteredList: this.state.filteredList,
			makeFilteredList: this.makeFilteredList
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
					<Route
						exact
						path="/answer-page"
						render={props => <AnswerPage word={currentWord} />}
					/>
					{['/game-start-page'].map(path => (
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
					))}
				</WordContext.Provider>
			</div>
		);
	}
}

export default App;
