import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './GameStartPage.css';

class GameStart extends Component {
	render(props) {
		return (
			<div>
				<section>
					<div className="game-start-page">
						<header>
							<div className="how-to-play-box">
								<h1 className="game-instructions">
									How to Play:
								</h1>
								<ol className="game-instructions-list-container">
									<li className="instructions-list-item">
										Pass the ball around the classroom until
										the timer stops
									</li>
									<li className="instructions-list-item">
										The timer will stop!{' '}
									</li>
									<li className="instructions-list-item">
										If you have the ball, guess the word on
										the screen.
									</li>
									<li className="instructions-list-item">
										The words are scrambled!
									</li>
									<li className="instructions-list-item">
										{' '}
										Good luck~
									</li>
								</ol>
							</div>
							<h1 className="ready-message">Are you ready?</h1>
						</header>
						<Link to="/game-home-page">
							<button className="submit-cancel">No</button>
						</Link>
						<Link to={`/game/${this.props.gameId}/guess-the-word/`}>
							<button className="submit-input">Yes!</button>
						</Link>
					</div>
				</section>
			</div>
		);
	}
}

export default GameStart;
