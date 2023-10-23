import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'
import otherReducers from './otherReducers'
import reducers from './reducers'
import selectRoutines from './selectRoutines'

const routinesSlice = createSlice({
  initialState,
  name: 'routines',
  reducers,
})

const routinesReducer = routinesSlice.reducer
const routines = {
  ...routinesSlice.actions,
  ...otherReducers,
  selectRoutines,
}

export default routines
export { routinesReducer }
