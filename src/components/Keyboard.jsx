import { KEYS, ENTER, DELETE } from "../constants/assets";
import Key from "./Key";

const Keyboard = ({ onLetterAdd, onLetterDelete, onEnterGuess, guesses }) => {
  const handleClick = (value) => {
    if (value === "ENTER") {
      onEnterGuess();
    } else if (value === "DELETE") {
      onLetterDelete();
    } else {
      onLetterAdd(value);
    }
  };

  const isWideButton = (key) => {
    return key === ENTER || key === DELETE;
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        {KEYS.map((keyRow, i) => (
          <div key={`row-${i}`} className="flex flex-row justify-center mb-1">
            {keyRow.map((key) => (
              <Key
                width={isWideButton(key) ? 64 : 40}
                value={key}
                key={key}
                onClick={handleClick}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
