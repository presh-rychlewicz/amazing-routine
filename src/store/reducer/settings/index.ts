import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'
import reducers from './reducers'
import selectSettings from './selectSettings'
import otherReducers from './otherReducers'

const settingsSlice = createSlice({
  initialState,
  name: 'settings',
  reducers,
})

const settingsReducer = settingsSlice.reducer
const settings = {
  ...settingsSlice.actions,
  ...otherReducers,
  selectSettings,
}

export default settings
export { settingsReducer }
