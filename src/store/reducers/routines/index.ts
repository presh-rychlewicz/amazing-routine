import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'
import selectRoutines from './selectRoutines'
import { SingleRoutine } from './types'

export const routinesSlice = createSlice({
  name: 'routines',
  initialState,
  reducers: {
    remove: (state, id: PayloadAction<SingleRoutine['id']>) => {
      const oldValue = state.value
      const newValue = [...oldValue]
      const routineToBeRemovedIndex = newValue.findIndex(
        (r) => r.id === id.payload
      )
      const routineToBeRemoved = newValue[routineToBeRemovedIndex]
      if (!routineToBeRemoved || routineToBeRemoved.status === 'REMOVED') {
        throw new Error('ERROR')
      }

      const updatedRoutine = { ...routineToBeRemoved }
      updatedRoutine.status = 'REMOVED'
      newValue[routineToBeRemovedIndex] = updatedRoutine

      state.value = newValue
    },
  },
})

const { remove } = routinesSlice.actions

export default routinesSlice.reducer
export { selectRoutines, remove }
