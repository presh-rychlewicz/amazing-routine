import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'
import initialState from './initialState'
import remove from './remove'
import removeAllExpired from './removeAllExpired'
import selectRoutines from './selectRoutines'
import { SingleRoutine, SingleRoutineStatuses, UpdatePayload } from './types'

const routinesSlice = createSlice({
  name: 'routines',
  initialState,
  reducers: {
    add: (
      state,
      { payload }: PayloadAction<Omit<SingleRoutine, 'id' | 'status'>>
    ) => {
      const isInFuture = dayjs(payload.startDate).isAfter(undefined, 'day')
      const newRoutine: SingleRoutine = {
        name: payload.name,
        note: payload.note,
        time: payload.time,
        startDate: payload.startDate,
        endDate: payload.endDate,
        days: payload.days,
        interval: payload.interval,
        id: crypto.randomUUID(),
        status: isInFuture
          ? SingleRoutineStatuses.FUTURE
          : SingleRoutineStatuses.ACTIVE,
      }
      const newValue = [...state.value, newRoutine]
      state.value = newValue
    },
    update: (state, { payload }: PayloadAction<UpdatePayload>) => {
      const newValue = [...state.value]
      const routineToBeUpdatedIndex = newValue.findIndex(
        (r) => r.id === payload.id
      )
      const routineToBeUpdated = newValue[routineToBeUpdatedIndex]
      if (!routineToBeUpdated) {
        throw new Error('ERROR')
      }

      const updatedRoutine: SingleRoutine = {
        ...routineToBeUpdated,
        ...payload.update,
      }
      newValue[routineToBeUpdatedIndex] = updatedRoutine

      state.value = newValue
    },
  },
})

const { update, add } = routinesSlice.actions
const routinesReducer = routinesSlice.reducer
const routines = {
  add,
  remove,
  removeAllExpired,
  selectRoutines,
  update,
}

export default routines
export { routinesReducer }
