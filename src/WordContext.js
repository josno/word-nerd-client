import React from 'react';

const WordContext = React.createContext({
	currentGameId: '',
	currentWord: '',
	isLoggedIn: '',
	isLoggedOut: '',

	getSavedGameId: () => {},
	getUserId: () => {},
	getCurrentWord: () => {},
	handleLogInState: () => {},
	handleLogOutState: () => {},
	deleteSavedGame: () => {}
});

export default WordContext;
