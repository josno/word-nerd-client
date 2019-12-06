import React, { Component } from 'react';
import EntryOption from '../entryoption/EntryOption';
import './Homepage.css';

class Homepage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<header role="banner">
					<h1 className="home-page-title"> Word Nerd </h1>
				</header>
				<section>
					<header>
						<h3>
							Make english games to play in the classroom
							together.
						</h3>
					</header>
					<p>
						Simply type in vocabulary words you'd like to practice
						for fluency and generate a "Pass the Ball" game to play
						together in the classroom.
					</p>
				</section>
				<section>
					<EntryOption />
				</section>
			</div>
		);
	}
}

export default Homepage;
