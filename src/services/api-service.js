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
		return fetch(`${config.API_ENDPOINT}/v1/games/${gameId}`, {
			headers: {
				Authorization: `Bearer ${TokenService.getAuthToken()} `
			}
		});
	},
	postNewGame(userId, object) {
		//refactor - add the fetch from app
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
	},
	deleteGame(gameId) {
		return fetch(`${config.API_ENDPOINT}/v1/games/${gameId}`, {
			method: 'DELETE',
			headers: {
				authorization: `Bearer ${TokenService.getAuthToken()}`
			}
		});
	}
};

export default GamesService;

//refactor to replace all api fetch calls
