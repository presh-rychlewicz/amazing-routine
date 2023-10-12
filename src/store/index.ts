import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import * as reducers from './reducers'
import * as hooks from './hooks'

export const store = configureStore({
  reducer: {
    counter: reducers.counter,
    routines: reducers.routines,
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
export { hooks, reducers }
