import { RootState } from 'schemas'

const selectTasks = (state: RootState) => state.tasks.value

export default selectTasks
