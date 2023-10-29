import { TypeOf, boolean, number, object } from 'zod'
import { singleTaskSchema } from './singleTask'
import { singleContextSchema } from './singleContext'

const scheduleTaskStepDataSchema = object({
  completionInSeconds: number(),
  contextName: singleContextSchema._def.shape().name.optional(),
  durationInSeconds: singleTaskSchema._def.shape().durationInSeconds.nullish(),
  id: singleTaskSchema._def.shape().id,
  index: number(),
  isDone: boolean(),
  isFailed: boolean(),
  isFirstInContext: boolean(),
  isLastInContext: boolean(),
  isSkipped: boolean(),
  name: singleTaskSchema._def.shape().name,
})
type ScheduleTaskStepData = TypeOf<typeof scheduleTaskStepDataSchema>

export { scheduleTaskStepDataSchema }
export type { ScheduleTaskStepData }
