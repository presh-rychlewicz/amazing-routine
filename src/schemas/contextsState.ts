import { TypeOf, array, literal, object } from 'zod'
import { singleContextSchema } from './singleContext'

const contextsStateSchema = object({
  value: array(singleContextSchema),
  version: literal(2),
})
type ContextsState = TypeOf<typeof contextsStateSchema>

export { contextsStateSchema }
export type { ContextsState }
