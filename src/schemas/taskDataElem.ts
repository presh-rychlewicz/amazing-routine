import { TypeOf, boolean, number, object } from 'zod'
import { singleTaskSchema } from './singleTask'

const taskDataElemSchema = object({
  completionSeconds: number(),
  durationInSeconds: singleTaskSchema._def.shape().durationInSeconds.nullish(),
  id: singleTaskSchema._def.shape().id,
  index: number(),
  isDone: boolean(),
  isFailed: boolean(),
  isFirst: boolean(),
  isLast: boolean(),
  isSkipped: boolean(),
  name: singleTaskSchema._def.shape().name,
})
type TaskDataElem = TypeOf<typeof taskDataElemSchema>

export { taskDataElemSchema }
export type { TaskDataElem }
