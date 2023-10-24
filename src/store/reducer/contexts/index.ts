import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'
import reducers from './reducers'
import selectContexts from './selectContexts'
import otherReducers from './otherReducers'

const contextsSlice = createSlice({
  initialState,
  name: 'contexts',
  reducers,
})

const contextsReducer = contextsSlice.reducer
const contexts = {
  ...contextsSlice.actions,
  ...otherReducers,
  selectContexts,
}

export default contexts
export { contextsReducer }
