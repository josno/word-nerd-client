import React from 'react';

const WordContext = React.createContext({
	currentGameId: '',
	currentWord: '',
	// filteredList: '',
	isLoggedIn: '',
	isLoggedOut: '',
	saveNewGame: () => {},
	getSavedGameId: () => {},
	getUserId: () => {},
	getCurrentWord: () => {},
	handleLogInState: () => {},
	handleLogOutState: () => {}
});

export default WordContext;
