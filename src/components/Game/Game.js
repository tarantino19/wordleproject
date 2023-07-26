import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = useState([]);

	function handleSubmitGuess(tentativeGuess) {
		// const nextGuess = {
		// 	value: tentativeGuess,
		// 	id: Math.random(),
		// };
		setGuesses([...guesses, tentativeGuess]);
		// setGuesses([...guesses, nextGuess]);
	}

	return (
		<>
			<GuessResults guesses={guesses} answer={answer} />
			<GuessInput handleSubmitGuess={handleSubmitGuess} />
		</>
	);
}

export default Game;
