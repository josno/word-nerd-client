import React from 'react';

const WordContext = React.createContext({
	currentGameId: '',
	isLoggedIn: '',
	userId: '',
	getSavedGameId: () => {},
	saveUserId: () => {},
	handleLogInState: () => {}
});

export default WordContext;
