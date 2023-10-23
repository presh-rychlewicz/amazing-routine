import { TypeOf, number } from 'zod'

const unixSchema = number()
type Unix = TypeOf<typeof unixSchema>

export { unixSchema }
export type { Unix }
