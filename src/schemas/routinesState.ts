import { TypeOf, array, literal, object } from 'zod'
import { singleRoutineSchema } from './singleRoutine'

const routinesStateSchema = object({
  value: array(singleRoutineSchema),
  version: literal(5),
})
type RoutinesState = TypeOf<typeof routinesStateSchema>

export { routinesStateSchema }
export type { RoutinesState }
