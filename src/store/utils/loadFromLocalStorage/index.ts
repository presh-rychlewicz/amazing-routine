import { REDUX_LOCAL_STORAGE_KEY } from 'config'
import migrateRoutines from './migrateRoutines'
import migrateTasks from './migrateTasks'

const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem(REDUX_LOCAL_STORAGE_KEY)
    if (serialisedState === null) {
      return undefined
    }

    const rawState = JSON.parse(serialisedState)
    const rootState = {
      routines: migrateRoutines(rawState.routines),
      tasks: migrateTasks(rawState.tasks),
    }

    return rootState
  } catch (e) {
    console.warn(e)
    return undefined
  }
}

export default loadFromLocalStorage
