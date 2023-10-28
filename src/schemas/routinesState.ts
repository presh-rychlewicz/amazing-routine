import { TypeOf, array, literal, object } from 'zod'
import { singleRoutineSchema } from './singleRoutine'
import { ROUTINES_SCHEMA_CURRENT_VERSION } from 'config'

const routinesStateSchema = object({
  value: array(singleRoutineSchema),
  version: literal(ROUTINES_SCHEMA_CURRENT_VERSION),
})
type RoutinesState = TypeOf<typeof routinesStateSchema>

export { routinesStateSchema }
export type { RoutinesState }
