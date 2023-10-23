import { singleTaskStatusEnum } from './singleTaskStatusEnum'
import { TypeOf, array, boolean, object } from 'zod'

const taskListFiltersSchema = object({
  shouldShowTasksWithoutRoutine: boolean(),
  status: array(singleTaskStatusEnum),
})
type TaskListFilters = TypeOf<typeof taskListFiltersSchema>

export { taskListFiltersSchema }
export type { TaskListFilters }
