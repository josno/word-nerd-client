import React from 'react';

const WordContext = React.createContext({
	username: '',
	password: '',
	savedGames: [],
	currentGameId: '', //remove and add as props in App.js
	currentWord: '',
	filteredList: '',
	saveNewGame: () => {},
	getSavedGameId: () => {},
	getCurrentWord: () => {},
	makeFilteredList: () => {}
});

export default WordContext;
