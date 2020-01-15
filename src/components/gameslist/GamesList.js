import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WordContext from '../../WordContext';
import './GamesList.css';

class GamesList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.formatDate = this.formatDate.bind(this);
	}

	formatDate(date) {
		const formattedDate = new Date(date).toLocaleString().split(',')[0];

		const created = 'Created:';
		return created + ' ' + formattedDate;
	}

	static contextType = WordContext;
	render(props) {
		return (
			<div>
				<ul className="list-of-games">
					{this.props.savedGames.length > 0 &&
						this.props.savedGames.map(g => (
							<li
								key={`${g.id}-${g.title}`}
								className="game-info"
							>
								<div className="info-container">
									<h2>{g.title}</h2>
									<h3>{this.formatDate(g.date_created)}</h3>
								</div>

								<div className="button-container">
									<Link
										to={`/game/${g.id}/edit-page`}
										className="game-link"
									>
										<button
											className="button-style"
											type="submit"
											onClick={() =>
												this.context.getSavedGameId(
													g.id
												)
											}
										>
											Edit
										</button>
									</Link>
									<Link
										className="game-link"
										to={`/game/${g.id}/game-start-page`}
									>
										<button
											className="button-style"
											type="submit"
											onClick={() =>
												this.context.getSavedGameId(
													g.id
												)
											}
										>
											Play
										</button>
									</Link>

									<button
										className="button-style game-link"
										onClick={() =>
											this.props.handleDelete(g.id)
										}
									>
										Delete
									</button>
								</div>
							</li>
						))}
				</ul>
			</div>
		);
	}
}

export default GamesList;
