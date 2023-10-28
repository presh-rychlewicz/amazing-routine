import { TypeOf, array, literal, object } from 'zod'
import { singleContextSchema } from './singleContext'
import { CONTEXTS_SCHEMA_CURRENT_VERSION } from 'config'

const contextsStateSchema = object({
  value: array(singleContextSchema),
  version: literal(CONTEXTS_SCHEMA_CURRENT_VERSION),
})
type ContextsState = TypeOf<typeof contextsStateSchema>

export { contextsStateSchema }
export type { ContextsState }
