import React, { useState } from "react";

function GuessInput({ handleSubmitGuess }) {
	const [tentativeGuess, setTentativeGuess] = useState([]);

	function handleSubmit(event) {
		event.preventDefault();
		handleSubmitGuess(tentativeGuess);
		setTentativeGuess("");
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
					value={tentativeGuess}
					onChange={(event) => {
						const nextGuess = event.target.value.toUpperCase();
						setTentativeGuess(nextGuess);
					}}
				/>
			</form>
			<button
				style={{
					color: "white",
					fontWeight: "bolder",
					backgroundColor: "#4CAF50",
					display: "inline-block",
					fontSize: "16px",
					paddingTop: "10px",
					paddingBottom: "10px",
					padding: "15px 32px",
					textAlign: "center",
				}}
				onClick={() => window.location.reload()}
			>
				RESTART GAME
			</button>
		</>
	);
}

export default GuessInput;
