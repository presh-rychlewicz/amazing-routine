import { RootState } from 'schemas'

const selectRoutines = (state: RootState) => state.routines.value

export default selectRoutines
