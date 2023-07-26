import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = useState([]);
	const [gameStatus, setGameStatus] = useState("running");
	//running, won, lost

	function handleSubmitGuess(tentativeGuess) {
		// const nextGuess = {
		// 	value: tentativeGuess,
		// 	id: Math.random(),
		// }; //this works as well
		// setGuesses([...guesses, nextGuess]);  //this works as well
		// setGuesses([...guesses, tentativeGuess]); //more simple index key

		const nextGuesses = [...guesses, tentativeGuess];
		setGuesses(nextGuesses);
		if (tentativeGuess.toUpperCase() === answer) {
			setGameStatus("won");
		} else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus("lost");
		}
	}

	return (
		<>
			{gameStatus}
			<GuessResults guesses={guesses} answer={answer} />
			<GuessInput
				handleSubmitGuess={handleSubmitGuess}
				gameStatus={gameStatus}
			/>
			{gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
			{gameStatus === "lost" && <LostBanner answer={answer} />}
		</>
	);
}

export default Game;
