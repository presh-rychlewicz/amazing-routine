import { RoutinesState } from './types'

const selectRoutines = (state: { routines: RoutinesState }) =>
  state.routines.value

export default selectRoutines
