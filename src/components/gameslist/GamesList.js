import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WordContext from '../../WordContext';
import './GamesList.css';

class GamesList extends Component {
	static contextType = WordContext;
	constructor(props) {
		super(props);
		this.formatDate = this.formatDate.bind(this);
	}

	formatDate(date) {
		const formattedDate = new Date(date).toLocaleString().split(',')[0];

		const created = 'Created:';
		return created + ' ' + formattedDate;
	}

	render() {
		return (
			<div className="game-list-container">
				<ul className="list-of-games">
					{this.props.savedGames.length > 0 &&
						this.props.savedGames.map(g => (
							<li
								key={`${g.id}-${g.title}`}
								className="game-info"
							>
								<div className="info-container">
									<h2 className="info-text">{g.title}</h2>
									<h3 className="info-text">
										{this.formatDate(g.date_created)}
									</h3>
								</div>

								<div className="button-container">
									<Link
										to={`/game/${g.id}/edit-page`}
										className="game-link"
									>
										<button
											aria-label="edit"
											className="button-style"
											type="submit"
											onClick={() =>
												this.context.setCurrentGameId(
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
											aria-label="play"
											className="button-style"
											type="submit"
											onClick={() =>
												this.context.setCurrentGameId(
													g.id
												)
											}
										>
											Play
										</button>
									</Link>

									<button
										aria-label="delete"
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
