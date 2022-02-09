import { WORD_LENGTH } from "../constants/rules";
import Cell from "./Cell";

const CurrentRow = ({ guess }) => {
  const splitGuess = guess.split("");
  const emptyCells = Array.from(Array(WORD_LENGTH - splitGuess.length));

  return (
    <div className="flex justify-center mb-1">
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((cell, i) => (
        <Cell key={i} />
      ))}
    </div>
  );
};

export default CurrentRow;
