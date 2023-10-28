import { CONTEXTS_SCHEMA_CURRENT_VERSION } from 'config'
import { ContextsState } from 'schemas'

const initialState: ContextsState = {
  value: [],
  version: CONTEXTS_SCHEMA_CURRENT_VERSION,
}

export default initialState
