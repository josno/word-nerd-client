import React from 'react';

const WordContext = React.createContext({
	username: '',
	password: '',
	inputWords: [],
	savedGames: [],
	currentGameId: '',
	saveNewGame: () => {},
	getSavedGameId: () => {}
});

export default WordContext;
