import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './homepage/Homepage';
import SignUp from './signup/SignUp';
import GameHomePage from './gamehomepage/GameHomePage';
import InputPage from './input-page/InputPage';
import GameStartPage from './gamestartpage/GameStartPage';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false
		};
	}
	render() {
		return (
			<div>
				<nav role="navigation"> nav </nav>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/" component={SignUp} />
				<Route exact path="/game-home-page" component={GameHomePage} />
				<Route exact path="/input-page" component={InputPage} />
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
