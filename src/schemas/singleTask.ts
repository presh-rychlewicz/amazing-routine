import { TypeOf, number, object, string } from 'zod'
import { idSchema } from './id'
import { routineMetaStatusSchema } from './routineMetaStatuses'
import { singleTaskStatusEnum } from './singleTaskStatusEnum'
import { scoreSchema } from './score'

// TODO: add context
const singleTaskSchema = object({
  durationInSeconds: number().optional(),
  id: idSchema,
  name: string(),
  note: string().optional(),
  order: number(),
  routineId: string().optional(),
  routineMeta: object({
    status: routineMetaStatusSchema,
  }).optional(),
  score: scoreSchema,
  status: singleTaskStatusEnum,
})
type SingleTask = TypeOf<typeof singleTaskSchema>

export { singleTaskSchema }
export type { SingleTask }
