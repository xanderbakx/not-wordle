import { useState, useEffect } from "react";

import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
import { isValidGuess, isCorrectGuess, solution } from "./helpers/words";

import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

import "./App.css";
import { NUM_GUESSES, WORD_LENGTH } from "./constants/rules";

function App() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme") === "dark"
      : prefersDarkMode
      ? true
      : false
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleDarkMode = (isDark) => {
    setIsDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const onLetterAdd = (value) => {
    if (currentGuess.length < WORD_LENGTH && guesses.length < NUM_GUESSES) {
      setCurrentGuess(`${currentGuess}${value}`);
    }
  };

  const onLetterDelete = () => {
    setCurrentGuess(currentGuess.slice(0, -1));
  };

  const onEnterGuess = () => {
    // Check guess word length
    if (currentGuess.length !== WORD_LENGTH) {
      alert("Word not long enough!");
    }

    // Check if guess is valid
    if (!isValidGuess(currentGuess)) {
      alert("Word not valid");
    }

    // Add guess to guesses
    if (currentGuess.length === WORD_LENGTH && guesses.length < NUM_GUESSES) {
      setGuesses([...guesses, currentGuess]);
      setCurrentGuess("");
      // Check if guess is correct!
      if (isCorrectGuess(currentGuess)) {
        alert("Correct! You win!");
      }

      // YOU LOSE
      if (guesses.length === NUM_GUESSES - 1) {
        alert("YOU LOSE!");
      }
    }

    console.log(guesses);
  };

  return (
    <div className="pt-2 pb-8 max-w-7x1 mx-auto sm:px-6 lg:px-8">
      <div className="flex w-80 mx-auto items-center mb-8 mt-20">
        <h1 className="text-xl ml-2.5 grow font-bold dark:text-white">
          WORDLE
        </h1>
        {isDarkMode ? (
          <MdOutlineLightMode onClick={() => handleDarkMode(!isDarkMode)} />
        ) : (
          <MdDarkMode onClick={() => handleDarkMode(!isDarkMode)} />
        )}
      </div>
      <Grid guesses={guesses} currentGuess={currentGuess} />
      <Keyboard
        onLetterAdd={onLetterAdd}
        onLetterDelete={onLetterDelete}
        onEnterGuess={onEnterGuess}
        guesses={guesses}
      />
    </div>
  );
}

export default App;
