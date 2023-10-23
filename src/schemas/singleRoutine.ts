import { TypeOf, array, boolean, number, object, string, tuple } from 'zod'
import { idSchema } from './id'
import { pastRun } from './pastRun'
import { singleRoutineStatusEnum } from './singleRoutineStatusEnum'
import { unixSchema } from './unix'
import { scoreSchema } from './score'

const singleRoutineSchema = object({
  days: tuple([
    boolean(),
    boolean(),
    boolean(),
    boolean(),
    boolean(),
    boolean(),
    boolean(),
  ]),
  endDateInUnix: unixSchema.optional(),
  id: idSchema,
  interval: number(),
  name: string(),
  note: string().optional(),
  pastRuns: array(pastRun),
  score: scoreSchema,
  startDateInUnix: unixSchema,
  status: singleRoutineStatusEnum,
  time: string().optional(),
})
type SingleRoutine = TypeOf<typeof singleRoutineSchema>

export { singleRoutineSchema }
export type { SingleRoutine }
