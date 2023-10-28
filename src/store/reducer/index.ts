import { routinesReducer } from './routines'
import { tasksReducer } from './tasks'
import { contextsReducer } from './contexts'
import { settingsReducer } from './settings'

const reducer = {
  contexts: contextsReducer,
  routines: routinesReducer,
  settings: settingsReducer,
  tasks: tasksReducer,
}

export default reducer
export { default as contexts } from './contexts'
export { default as routines } from './routines'
export { default as settings } from './settings'
export { default as tasks } from './tasks'
