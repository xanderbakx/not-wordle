import { solution } from './words'

export const getHighlights = guesses => {
  const charObj = {}

  guesses.forEach(word => {
    word.split('').forEach((letter, i) => {
      if (!solution.includes(letter)) {
        return (charObj[letter] = 'not-found')
      }
      if (letter === solution[i]) {
        return (charObj[letter] = 'correct')
      }
      if (charObj[letter] !== 'correct') {
        return (charObj[letter] = 'wrong-position')
      }
    })
  })
  return charObj
}

export const getGuessHighlights = guess => {
  const splitSolution = solution.split('')
  const splitGuess = guess.split('')

  const solutionCharsTaken = splitSolution.map(_ => false)
  const highlights = Array.from(Array(guess.length))

  splitGuess.forEach((letter, i) => {
    if (letter === splitSolution[i]) {
      highlights[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    }
  })

  splitGuess.forEach((letter, i) => {
    if (highlights[i]) return
    if (!splitSolution.includes(letter)) {
      highlights[i] = 'not-found'
      return
    }
    const indexOfPresentChar = splitSolution.findIndex(
      (x, index) => x === letter && !solutionCharsTaken[index]
    )
    if (indexOfPresentChar > -1) {
      highlights[i] = 'wrong-position'
      solutionCharsTaken[indexOfPresentChar] = true
      return
    } else {
      highlights[i] = 'not-found'
      return
    }
  })
  return highlights
}
