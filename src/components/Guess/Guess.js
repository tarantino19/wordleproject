import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
	const className = status ? `cell ${status}` : `cell`;
	return <span className={className}>{letter}</span>;
}

function Guess({ value, index, answer }) {
	const result = checkGuess(value, answer);

	// console.log(result);

	return (
		<p className="guess">
			{range(5).map((num) => (
				<Cell
					key={num}
					status={result ? result[num].status : undefined}
					letter={result ? result[num].letter : undefined}
				/>
			))}
		</p>
	);
}

export default Guess;
