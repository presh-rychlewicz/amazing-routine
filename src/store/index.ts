import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { routinesReducer, tasksReducer } from './reducers'
export * from './hooks'

export const store = configureStore({
  reducer: {
    routines: routinesReducer,
    tasks: tasksReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
