import { TypeOf, array, number, object, string } from 'zod'
import { idSchema } from './id'
import { routineMetaStatusSchema } from './routineMetaStatuses'
import { scoreSchema } from './score'
import { singleTaskStatusEnum } from './singleTaskStatusEnum'
import { taskRunSchema } from './taskRun'

const singleTaskSchema = object({
  contextId: string().optional(),
  durationInSeconds: number().optional(),
  id: idSchema,
  index: number(),
  name: string(),
  note: string().optional(),
  order: number(),
  routineId: string().optional(),
  routineMeta: object({
    status: routineMetaStatusSchema,
  }).optional(),
  runs: array(taskRunSchema),
  score: scoreSchema,
  status: singleTaskStatusEnum,
})
type SingleTask = TypeOf<typeof singleTaskSchema>

export { singleTaskSchema }
export type { SingleTask }
