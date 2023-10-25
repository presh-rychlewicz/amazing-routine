import { TypeOf, array, literal, object } from 'zod'
import { singleTaskSchema } from './singleTask'

const tasksStateSchema = object({
  value: array(singleTaskSchema),
  version: literal(5),
})
type TasksState = TypeOf<typeof tasksStateSchema>

export { tasksStateSchema }
export type { TasksState }
