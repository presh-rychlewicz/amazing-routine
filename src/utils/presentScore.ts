import { Score } from 'schemas'

const presentScore = (score: Score) => `${score * 100}%`

export default presentScore
