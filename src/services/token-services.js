import config from '../config';

const TokenService = {
	saveAuthToken(token) {
		window.localStorage.setItem(config.TOKEN_KEY, token);
	},
	getAuthToken() {
		//get it everytime you make a fetch request to the API
		return window.localStorage.getItem(config.TOKEN_KEY);
	},
	clearAuthToken() {
		window.localStorage.removeItem(config.TOKEN_KEY);
	},
	hasAuthToken() {
		//boolean
		return !!TokenService.getAuthToken();
	},
	makeBasicAuthToken(userName, password) {
		return window.btoa(`${userName}:${password}`);
	}
};

export default TokenService;
