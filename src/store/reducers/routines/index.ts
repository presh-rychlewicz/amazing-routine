import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'
import initialState from './initialState'
import remove, { RemovePayload } from './remove'
import selectRoutines from './selectRoutines'
import removeAllExpired from './removeAllExpired'
import { SingleRoutine, SingleRoutineStatuses } from './types'

const routinesSlice = createSlice({
  name: 'routines',
  initialState,
  reducers: {
    add: (
      state,
      {
        payload: { name, note, time, startDate, days, interval, endDate },
      }: PayloadAction<Omit<SingleRoutine, 'id' | 'status'>>
    ) => {
      const isInFuture = dayjs(startDate).isAfter(undefined, 'day')
      const newRoutine: SingleRoutine = {
        name,
        note,
        time,
        startDate,
        endDate,
        days,
        interval,
        id: crypto.randomUUID(),
        status: isInFuture
          ? SingleRoutineStatuses.FUTURE
          : SingleRoutineStatuses.ACTIVE,
      }
      const newValue = [...state.value, newRoutine]

      state.value = newValue
    },
    update: (
      state,
      { payload: { id, update } }: PayloadAction<RemovePayload>
    ) => {
      const newValue = [...state.value]
      const routineToBeUpdatedIndex = newValue.findIndex((r) => r.id === id)
      const routineToBeUpdated = newValue[routineToBeUpdatedIndex]
      if (!routineToBeUpdated) {
        throw new Error('ERROR')
      }

      const updatedRoutine = {
        ...routineToBeUpdated,
        ...update,
      }
      newValue[routineToBeUpdatedIndex] = updatedRoutine

      state.value = newValue
    },
  },
})

const { update, add } = routinesSlice.actions

const routinesReducer = routinesSlice.reducer
const routines = {
  update,
  add,
  remove,
  removeAllExpired,
  selectRoutines,
}

export default routines
export { routinesReducer }
