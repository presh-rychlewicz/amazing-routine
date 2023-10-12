import { RootState } from '../..'

const selectRoutines = (state: RootState) => state.routines.value

export default selectRoutines
