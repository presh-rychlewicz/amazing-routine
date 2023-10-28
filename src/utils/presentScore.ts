import { Score } from 'schemas'

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const presentScore = (score: Score) => `${score * 100}%`

export default presentScore
