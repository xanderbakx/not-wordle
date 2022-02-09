import Cell from "./Cell";
import { WORD_LENGTH } from "../constants/rules";

const EmptyRow = () => {
  const emptyCells = Array.from(Array(WORD_LENGTH));
  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((cell, i) => (
        <Cell key={i} />
      ))}
    </div>
  );
};

export default EmptyRow;
