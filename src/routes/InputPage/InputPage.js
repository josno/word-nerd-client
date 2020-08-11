import React, { useState } from "react";
import "./InputPage.css";
import ValidationMessage from "../../components/ValidationMessage/ValidationMessage";
import GamesService from "../../services/api-service";

const InputPage = (props) => {
	const initialState = { value: "", touched: false };
	const [textInput, setTextInput] = useState(initialState);
	const [wordList, setWordList] = useState([]);
	const [title, setTitle] = useState(initialState);
	const [error, setError] = useState(null);

	const setInputStringToArray = (e) => {
		const { value } = e.target;
		/*Create an array and split by comma as user types
		so students can review the words*/

		const trimmedWordList = e.target.value.replace(/,\s*$/, "");
		const newList = trimmedWordList.split(",").map((i) => i.trim());
		setTextInput({ value: value, touched: true });
		setWordList(newList);
	};

	const updateTitle = (e) => {
		const { value } = e.target;
		setTitle({ value: value, touched: true });
	};

	const validateInput = () => {
		const input = textInput.value.trim();

		if (!input.includes(",")) {
			return "Add a comma after each word.";
		}

		const invalidChar = input.match(/[^a-zA-Z,\s]/g);
		if (invalidChar) {
			return "Type only letters please.";
		}
	};

	const validateTitle = () => {
		const titleInput = title.value;
		const invalidChar = titleInput.match(/[^a-zA-Z,\s]/g);
		if (invalidChar) {
			return "Type only letters please.";
		}
	};

	async function handleSubmit(e) {
		e.preventDefault();
		validateInput();

		const newGame = {
			title: title.value,
			word_list: wordList,
			date_created: new Date(),
		};

		const gameId = await GamesService.saveNewGame(newGame)
			.then((res) => {
				return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
			})
			.then((responsejson) => responsejson.id)
			.catch((res) => {
				setError(res.error);
			});
		/*Wait until you get the id*/
		props.history.push(`/game/${gameId}/game-start-page`);
	}

	const inputError = validateInput();
	const titleError = validateTitle();

	return (
		<main className='input-page-container'>
			<header className='input-instructions'>
				<h1 className='input-instructions-text'>Type Words In The Box</h1>
				<p>Separate each word with a comma!</p>
			</header>
			<section>
				<form>
					<input
						className='title-name'
						placeholder='Example: "Numbers" '
						onChange={(e) => updateTitle(e)}
						required
					/>

					{title.touched && <ValidationMessage message={titleError} />}

					<div className='input-container'>
						<textarea
							className='input-box'
							placeholder='Example: twenty, thirty...'
							aria-label='Type your words here'
							aria-required='true'
							onChange={(e) => setInputStringToArray(e)}
							required
						/>
					</div>
					{textInput.touched && <ValidationMessage message={inputError} />}
				</form>
				<div className='error-message'>{error}</div>
			</section>
			<div className='submit-button-container'>
				<button
					aria-label='cancel'
					className='submit-cancel'
					onClick={() => props.history.goBack()}
				>
					Cancel
				</button>

				<button
					aria-label='submit'
					className='submit-input'
					type='submit'
					disabled={validateInput()}
					onClick={(e) => handleSubmit(e)}
				>
					Submit
				</button>
			</div>
		</main>
	);
};

export default InputPage;
