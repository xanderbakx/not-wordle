import { getGuessHighlights } from '../helpers/highlights'
import Cell from './Cell'

const CompletedRow = ({ guess }) => {
  const highlights = getGuessHighlights(guess)
  return (
    <div className="flex justify-center mb-1">
      {guess.split('').map((letter, i) => (
        <Cell key={i} value={letter} highlight={highlights[i]} position={i} />
      ))}
    </div>
  )
}

export default CompletedRow
