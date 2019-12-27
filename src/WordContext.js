import React from 'react';

const WordContext = React.createContext({
	currentGameId: '',
	currentWord: '',
	filteredList: '',
	saveNewGame: () => {},
	getSavedGameId: () => {},
	getUserId: () => {},
	getCurrentWord: () => {},
	makeFilteredList: () => {}
});

export default WordContext;
