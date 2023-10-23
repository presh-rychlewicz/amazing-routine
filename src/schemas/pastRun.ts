import { TypeOf, object, string } from 'zod'
import { unixSchema } from './unix'

const pastRun = object({
  id: string(),
  timestamp: unixSchema,
})

type PastRun = TypeOf<typeof pastRun>

export { pastRun }
export type { PastRun }
