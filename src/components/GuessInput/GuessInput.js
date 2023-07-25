import React, { useState } from "react";

function GuessInput() {
	const [guess, setGuess] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
		console.log({ guess });
		setGuess("");
	}

	return (
		<>
			<form className="guess-input-wrapper" onSubmit={handleSubmit}>
				<label htmlFor="guess-input">Enter guess:</label>
				<input
					required
					id="guess-input"
					type="text"
					minLength={5}
					maxLength={5}
					pattern="[a-zA-Z]{5}"
					title="enter a 5 letter word"
					value={guess}
					onChange={(event) => {
						const nextGuess = event.target.value.toUpperCase();
						setGuess(nextGuess);
					}}
				/>
			</form>
		</>
	);
}

export default GuessInput;
