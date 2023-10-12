import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'
import selectRoutines from './selectRoutines'

export const routinesSlice = createSlice({
  name: 'routines',
  initialState,
  reducers: {},
})

export default routinesSlice.reducer
export { selectRoutines }
