import { TypeOf, number, object, enum as zEnum } from 'zod'
import { unixSchema } from './unix'
import { idSchema } from './id'

const taskRunSchema = object({
  completionInSeconds: number(),
  durationInSeconds: number(),
  id: idSchema,
  outcome: zEnum(['DONE', 'FAILED', 'SKIPPED']),
  score: number(),
  timestamp: unixSchema,
})

type TaskRun = TypeOf<typeof taskRunSchema>

export { taskRunSchema }
export type { TaskRun }
