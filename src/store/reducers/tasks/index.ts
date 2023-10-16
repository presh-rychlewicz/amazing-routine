import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'
import selectTasks from './selectTasks'
import promoteToInProgress from './promoteToInProgress'
import { SingleTask, UpdatePayload } from './types'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (
      state,
      { payload }: PayloadAction<Omit<SingleTask, 'id' | 'routineMeta'>>
    ) => {
      const newTaskBase: Omit<SingleTask, 'routineId' | 'routineMeta'> = {
        id: crypto.randomUUID(),
        name: payload.name,
        note: payload.note,
      }
      const newTask: SingleTask = {
        ...newTaskBase,
        ...(payload.routineId
          ? { routineId: payload.routineId, routineMeta: { status: 'NEW' } }
          : { routineId: undefined, routineMeta: undefined }),
      }

      const newValue = [...state.value, newTask]
      state.value = newValue
    },
    update: (state, { payload }: PayloadAction<UpdatePayload>) => {
      const newValue = [...state.value]
      const taskToBeUpdatedIndex = newValue.findIndex(
        (r) => r.id === payload.id
      )
      const taskToBeUpdated = newValue[taskToBeUpdatedIndex]
      if (!taskToBeUpdated) {
        throw new Error('ERROR')
      }

      // @ts-ignore
      const updatedTask: SingleTask = {
        ...taskToBeUpdated,
        ...payload.update,
      }
      newValue[taskToBeUpdatedIndex] = updatedTask

      state.value = newValue
    },
  },
})

const { add, update } = tasksSlice.actions
const tasksReducer = tasksSlice.reducer
const tasks = {
  add,
  promoteToInProgress,
  selectTasks,
  update,
}

export default tasks
export { tasksReducer }
