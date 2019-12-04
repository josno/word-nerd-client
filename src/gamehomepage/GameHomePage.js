import React, { Component } from 'react';
import './GameHomePage.css';

class GameHomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<section>
					<div className="game-container">
						<h1> Games List </h1>
						<div className="list-of-games">
							<h3 className="no-games-message">
								It looks like you haven't made any games yet.
							</h3>
						</div>
						<a href="three-input-page.html">
							<button className="create-game-button">
								<h2>Create a Pass the Ball Game</h2>
							</button>
						</a>
					</div>
				</section>
			</div>
		);
	}
}

export default GameHomePage;
