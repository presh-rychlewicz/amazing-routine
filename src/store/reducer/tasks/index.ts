import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'
import otherReducers from './otherReducers'
import reducers from './reducers'
import selectTasks from './selectTasks'

const tasksSlice = createSlice({
  initialState,
  name: 'tasks',
  reducers,
})

const tasksReducer = tasksSlice.reducer
const tasks = {
  ...tasksSlice.actions,
  ...otherReducers,
  selectTasks,
}

export default tasks
export { tasksReducer }
