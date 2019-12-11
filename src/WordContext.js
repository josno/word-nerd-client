import React from 'react';

const WordContext = React.createContext({
	username: '',
	password: '',
	inputWords: [],
	savedGames: [],
	currentGameId: '',
	currentWord: '',
	saveNewGame: () => {},
	getSavedGameId: () => {},
	getCurrentWord: () => {}
});

export default WordContext;
