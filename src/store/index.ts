import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { counterReducer, routinesReducer } from './reducers'
export * from './hooks'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    routines: routinesReducer,
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
