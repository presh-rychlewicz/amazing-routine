import { TASKS_SCHEMA_CURRENT_VERSION } from 'config'
import { TasksState } from 'schemas'

const initialState: TasksState = {
  value: [],
  version: TASKS_SCHEMA_CURRENT_VERSION,
}

export default initialState
