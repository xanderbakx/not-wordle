import Cell from "./Cell";

const CompletedRow = ({ guess }) => {
  return (
    <div className="flex justify-center mb-1">
      {guess.split("").map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
    </div>
  );
};

export default CompletedRow;
