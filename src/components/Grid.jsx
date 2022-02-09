import { NUM_GUESSES } from "../constants/rules";
import CompletedRow from "./CompletedRow";
import CurrentRow from "./CurrentRow";
import EmptyRow from "./EmptyRow";

const Grid = ({ guesses, currentGuess }) => {
  const emptyRows =
    guesses.length < NUM_GUESSES - 1
      ? Array.from(Array(NUM_GUESSES - guesses.length - 1))
      : [];

  return (
    <div>
      {guesses.map((guess, i) => (
        <CompletedRow key={i} guess={guess} />
      ))}
      {guesses.length < NUM_GUESSES && <CurrentRow guess={currentGuess} />}
      {emptyRows.map((row, i) => (
        <EmptyRow key={i} />
      ))}
    </div>
  );
};

export default Grid;
