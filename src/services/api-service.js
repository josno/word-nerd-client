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
	// saveNewGame(userId, object) {
	// 	//refactor - add the fetch from app
	// 	return fetch(`${config.API_ENDPOINT}/games/${userId}`, {
	// 		method: 'POST',
	// 		headers: {
	// 			authorization: `basic ${TokenService.getAuthToken()}`
	// 		},
	// 		body: {} //object information goes here
	// 	});
	// },

	saveNewGame(gameObject) {
		/* From submit via input-page then adds to state.savedGames */

		const newList = {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				Authorization: `bearer ${TokenService.getAuthToken()}`
			},
			body: JSON.stringify({
				title: gameObject.title,
				word_list: gameObject.word_list,
				date_created: new Date(),
				user_id: gameObject.user_id
			})
		};

		return fetch(`${config.API_ENDPOINT}/v1/games`, newList); //returns result of promises
	},
	editGame(userId, gameId) {
		return fetch(`${config.API_ENDPOINT}/games/${userId}`, {
			method: 'PUT',
			headers: {
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
