import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import WordContext from './WordContext';
import './App.css';
import Homepage from './homepage/Homepage';
import GameHomePage from './gamehomepage/GameHomePage';
import InputPage from './input-page/InputPage';
import GameStartPage from './gamestartpage/GameStartPage';
import PassTheBall from './passtheball/PassTheBall';
import GuessTheWord from './guesstheword/GuessTheWord';
import EndGamePage from './endgamepage/EndGamePage';
import AnswerPage from './answerpage/AnswerPage';

import STORE from './store/STORE';

class App extends Component {
	static contextType = WordContext;
	constructor(props) {
		super(props);
		this.state = {
			savedWords: STORE.exampleWords,
			inputWords: []
		};
		this.updateNewWords = this.updateNewWords.bind(this);
	}

	updateNewWords(array) {
		const newWords = array;

		this.setState({
			//add the words, not array because it's already formatted as array
			inputWords: [...this.state.inputWords, ...newWords]
		});
	}

	render() {
		const contextValue = {
			savedWords: this.state.savedWords,
			inputWords: this.state.inputWords,
			saveNewWords: this.updateNewWords
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
					<Route exact path="/answer-page" component={AnswerPage} />
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
