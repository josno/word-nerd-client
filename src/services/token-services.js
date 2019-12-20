import config from '../config';

const TokenService = {
	saveAuthToken(token) {
		window.localStorage.setItem('token', token);
	},
	getAuthToken() {
		//get it everytime you make a fetch request to the API
		return window.localStorage.getItem('token');
	},
	clearAuthToken() {
		window.localStorage.removeItem('token');
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
