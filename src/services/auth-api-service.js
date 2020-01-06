import config from '../config';

//this is a service for authorization
const AuthApiService = {
	postLogin(credentials) {
		return fetch(`${config.API_ENDPOINT}/auth/login`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(credentials)
		}).then(res =>
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
		);
	}
};

export default AuthApiService;
