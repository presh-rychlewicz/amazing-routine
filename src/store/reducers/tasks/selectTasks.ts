import { TasksState } from './types'

const selectTasks = (state: { tasks: TasksState }) => state.tasks.value

export default selectTasks
