import React from 'react';

const WordContext = React.createContext({
	currentGameId: '',
	isLoggedIn: '',
	setCurrentGameId: () => {},
	handleLogInState: () => {}
});

export default WordContext;
