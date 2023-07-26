import React, { useState } from "react";
import Guess from "../Guess/Guess";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses }) {
	return (
		<>
			<div className="guess-results">
				{range(NUM_OF_GUESSES_ALLOWED).map((num, index) => {
					return <Guess key={num} value={guesses[num]} />;
				})}
			</div>
		</>
	);
}

//we can use index for the key because the words are locked in

export default GuessResults;
