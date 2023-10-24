import { RootState } from 'schemas'

const selectContexts = (state: RootState) => state.contexts.value

export default selectContexts
