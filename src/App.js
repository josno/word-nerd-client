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

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<nav role="navigation"> nav </nav>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/game-home-page" component={GameHomePage} />
				<Route exact path="/input-page" component={InputPage} />
				<Route exact path="/pass-the-ball" component={PassTheBall} />
				<Route exact path="/guess-the-word" component={GuessTheWord} />
				<Route exact path="/end-game-page" component={EndGamePage} />
				<Route exact path="/answer-page" component={AnswerPage} />
				<Route
					exact
					path="/game-start-page"
					component={GameStartPage}
				/>
			</div>
		);
	}
}

export default App;
