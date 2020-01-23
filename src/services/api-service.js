import TokenService from '../services/token-service';
import config from '../config';
require('es6-promise').polyfill();
require('isomorphic-fetch');

const GamesService = {
	getUserGames() {
		return fetch(`${config.API_ENDPOINT}/v1/games/`, {
			headers: {
				Authorization: `bearer ${TokenService.getAuthToken()} `
			}
		}).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	},
	getGameContent(gameId) {
		return fetch(`${config.API_ENDPOINT}/v1/games/${gameId}`, {
			headers: {
				Authorization: `Bearer ${TokenService.getAuthToken()} `
			}
		}).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	},
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

		return fetch(`${config.API_ENDPOINT}/v1/games`, newList);
	},
	updateGame(gameObject, gameid) {
		const newList = {
			method: 'PATCH',
			headers: {
				'content-type': 'application/json',
				Authorization: `bearer ${TokenService.getAuthToken()}`
			},
			body: JSON.stringify({
				title: gameObject.title,
				word_list: gameObject.word_list
			})
		};

		return fetch(
			`${config.API_ENDPOINT}/v1/games/${gameid}`,
			newList
		).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : null
		);
	},
	deleteGame(gameId) {
		return fetch(`${config.API_ENDPOINT}/v1/games/${gameId}`, {
			method: 'DELETE',
			headers: {
				authorization: `Bearer ${TokenService.getAuthToken()}`
			}
		}).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : null
		);
	}
};

export default GamesService;
