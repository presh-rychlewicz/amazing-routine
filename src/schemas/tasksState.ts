import { TypeOf, array, literal, object } from 'zod'
import { singleTaskSchema } from './singleTask'
import { TASKS_SCHEMA_CURRENT_VERSION } from 'config'

const tasksStateSchema = object({
  value: array(singleTaskSchema),
  version: literal(TASKS_SCHEMA_CURRENT_VERSION),
})
type TasksState = TypeOf<typeof tasksStateSchema>

export { tasksStateSchema }
export type { TasksState }
