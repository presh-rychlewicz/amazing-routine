import { Score } from 'schemas'

const presentScore = (score: Score) => {
  return `${score * 100}%`
}

export default presentScore
