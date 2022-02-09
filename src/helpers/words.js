import { wordList } from "../constants/wordList";
import { validGuessList } from "../constants/validGuessList";

export const isValidGuess = (word) => {
  return (
    wordList.includes(word.toLowerCase()) ||
    validGuessList.includes(word.toLowerCase())
  );
};

export const isCorrectGuess = (word) => {
  return solution === word;
};

export const solution = "LATER";
