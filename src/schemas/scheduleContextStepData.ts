import { TypeOf, boolean, number, object, string } from 'zod'
import { idSchema } from './id'

const scheduleContextStepDataSchema = object({
  durationInSeconds: number(),
  id: idSchema,
  isDone: boolean(),
  isFirst: boolean(),
  isLast: boolean(),
  name: string(),
})
type ScheduleContextStepData = TypeOf<typeof scheduleContextStepDataSchema>

export { scheduleContextStepDataSchema }
export type { ScheduleContextStepData }
