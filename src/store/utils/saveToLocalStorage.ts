import { REDUX_LOCAL_STORAGE_KEY } from 'config'
import { RootState } from 'schemas'

const saveToLocalStorage = (state: RootState) => {
  try {
    const serialisedState = JSON.stringify(state)
    localStorage.setItem(REDUX_LOCAL_STORAGE_KEY, serialisedState)
  } catch (e) {
    console.warn(e)
  }
}

export default saveToLocalStorage
