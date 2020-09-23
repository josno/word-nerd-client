import React, { useState, useEffect } from "react";
import "./GuessTheWord.css";
import { Link } from "react-router-dom";
import GamesService from "../../../services/api-service";
import AnswerPage from "../AnswerPage/AnswerPage";
import ScrambledWordPage from "../ScrambledWordPage/ScrambledWordPage";
import PassTheBall from "../PassTheBall/PassTheBall";

const GuessTheWord = (props) => {
	const [showAnswer, setShowAnswer] = useState(false);
	const [passTheBall, setPassTheBall] = useState(true);
	const [randomWord, setRandomWord] = useState("");
	const [wordList, setWordList] = useState([]);

	const shuffleWord = (string) => {
		if (string.length <= 3) {
			const shortWordArray = string.split("");
			const shuffledShortWord =
				shortWordArray[1] + shortWordArray[0] + shortWordArray[2];
			return shuffledShortWord;
		} else {
			const unshuffled = string.split("");

			const shuffleString = function (str) {
				const shuffledWord = str
					.map((a) => ({ sort: Math.random(), value: a }))
					.sort((a, b) => a.sort - b.sort)
					.map((a) => a.value);
				if (shuffledWord === str) {
					shuffleString(shuffledWord);
				}
				return shuffledWord;
			};

			return shuffleString(unshuffled);
		}
	};

	const renderAnswer = () => {
		/* Don't show answer unless there's already a scrambled word*/
		if (passTheBall === false) {
			setShowAnswer(true);
		}
	};

	useEffect(() => {
		GamesService.getGameContent(props.gameId).then((responsejson) =>
			setWordList([...responsejson.word_list])
		);
	}, [props.gameId]);

	const handleClick = () => {
		const randomWord = wordList[Math.floor(Math.random() * wordList.length)];

		setRandomWord(randomWord);
		setPassTheBall(!passTheBall);
		showAnswer && setShowAnswer(!showAnswer);
	};

	const shuffledWord = shuffleWord(String(randomWord));

	return (
		<main className='guess-the-word-container'>
			{showAnswer ? (
				<AnswerPage word={randomWord} />
			) : passTheBall ? (
				<PassTheBall />
			) : (
				<ScrambledWordPage shuffledWord={shuffledWord} />
			)}

			<section className='game-controls'>
				<Link to={`/end-game-page`}>
					<button aria-label='end' className='control-button'>
						End
					</button>
				</Link>
				{!passTheBall && (
					<button
						aria-label='answer'
						className='control-button'
						onClick={() => renderAnswer()}
					>
						Answer
					</button>
				)}

				<button
					aria-label='next'
					className='control-button'
					onClick={() => handleClick()}
				>
					Next
				</button>
			</section>
		</main>
	);
};

export default GuessTheWord;
