import { TypeOf, boolean, number, object } from 'zod'
import { singleContextSchema } from './singleContext'
import { singleTaskSchema } from './singleTask'

const scheduleTaskStepDataSchema = object({
  completionInSeconds: number(),
  contextId: singleTaskSchema._def.shape().contextId,
  contextName: singleContextSchema._def.shape().name,
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
