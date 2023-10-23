import { routinesReducer } from './routines'
import { tasksReducer } from './tasks'

const reducer = {
  routines: routinesReducer,
  tasks: tasksReducer,
}

export default reducer
export { default as routines } from './routines'
export { default as tasks } from './tasks'
