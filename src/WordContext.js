import React from 'react';

const WordContext = React.createContext({
	username: '',
	password: '',
	inputWords: [],
	savedWords: [],
	saveNewWords: () => {}
});

export default WordContext;
