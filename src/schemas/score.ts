import { TypeOf, number } from 'zod'

const scoreSchema = number()
type Score = TypeOf<typeof scoreSchema>

export { scoreSchema }
export type { Score }
