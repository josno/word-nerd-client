import React, { useState, useEffect } from "react";
import "./EditPage.css";
import ValidationMessage from "../../components/ValidationMessage/ValidationMessage";
import GamesService from "../../services/api-service";

const EditPage = (props) => {
	const [wordList, setWordList] = useState([]);
	const [title, setTitle] = useState("");
	const [updatedTitle, setUpdatedTitle] = useState(false);
	const [updatedInput, setUpdatedInput] = useState(false);

	const updateInput = (text) => {
		setWordList(text);
		setUpdatedInput(true);
	};

	const updateTitle = (text) => {
		setTitle(text);
		setUpdatedTitle(true);
	};

	const validateInput = () => {
		const wordInput = wordList.toString();

		const invalidChar = wordInput.match(/[^a-zA-Z,\s]/g);

		if (invalidChar) {
			return "Type only letters please.";
		}
	};

	const validateTitle = () => {
		const titleInput = title;
		const invalidChar = titleInput.match(/[^a-zA-Z,\s]/g);

		if (invalidChar) {
			return "Type only letters please.";
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const trimmedWordList = wordList.replace(/,\s*$/, "");

		const wordListArray =
			typeof trimmedWordList !== "string"
				? trimmedWordList
				: trimmedWordList.split(",").map((i) => i.trim());

		const newGame = {
			title: title,
			word_list: wordListArray,
		};

		GamesService.updateGame(newGame, props.gameId).then((response) => {
			props.history.push(`/game-home-page`);
		});
	};

	useEffect(() => {
		GamesService.getGameContent(props.gameId).then((responsejson) => {
			const words = [...responsejson.word_list].join(", ");
			setWordList(words);
			setTitle(responsejson.title);
		});
	}, [props.gameId]);

	const titleError = validateTitle();
	const inputError = validateInput();

	return (
		<div>
			<section>
				<header className='input-instructions'>
					<h1>Type Words into the Box Separated by Commas</h1>
				</header>
				<form>
					<input
						className='title-name'
						value={title}
						onChange={(e) => updateTitle(e.target.value)}
						required
					/>

					{updatedTitle && <ValidationMessage message={titleError} />}
					<div className='input-container'>
						<textarea
							className='input-box'
							aria-required='true'
							value={wordList}
							onChange={(e) => updateInput(e.target.value)}
							required
						/>
					</div>

					{updatedInput && <ValidationMessage message={inputError} />}
				</form>
				<div className='submit-button-container'>
					<button
						aria-label='cancel'
						className='submit-cancel'
						onClick={() => props.history.goBack()}
					>
						Cancel
					</button>

					<button
						aria-label='update'
						className='submit-input'
						type='submit'
						disabled={validateInput() || validateTitle()}
						onClick={(e) => handleSubmit(e)}
					>
						Update
					</button>
				</div>
			</section>
		</div>
	);
};

export default EditPage;
