import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'

import { loadFromLocalStorage, saveToLocalStorage } from './utils'

const preloadedState = loadFromLocalStorage()
const store = configureStore({
  preloadedState,
  reducer,
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
export * from './hooks'
export * from './reducer'
