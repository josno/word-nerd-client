import TokenService from '../services/token-service';
import config from '../config';

const GamesService = {
	getUserGames(userId) {
		return fetch(`${config.API_ENDPOINT}/games/${userId}`, {
			headers: {
				authorization: `basic ${TokenService.getAuthToken()}`
			}
		});
	},
	getGameContent(gameId) {
		return fetch(`${config.API_ENDPOINT}/games/${gameId}`, {
			headers: {
				authorization: `basic ${TokenService.getAuthToken()}`
			}
		});
	},
	postNewGame(userId, gameId) {
		return fetch(`${config.API_ENDPOINT}/games/${userId}`, {
			headers: {
				method: 'POST',
				authorization: `basic ${TokenService.getAuthToken()}`
			},
			body: {} //object information goes here
		});
	},
	editGame(userId, gameId) {
		return fetch(`${config.API_ENDPOINT}/games/${userId}`, {
			headers: {
				method: 'PUT',
				authorization: `basic ${TokenService.getAuthToken()}`
			}
		});
	}
};
