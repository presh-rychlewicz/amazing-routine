import { TypeOf, object, string } from 'zod'
import { singleRoutineSchema } from './singleRoutine'

const routineUpdatePayloadSchema = object({
  // TODO: singleRoutineSchema._input.id,
  id: string(),
  update: singleRoutineSchema.omit({ id: true }).partial(),
})
type RoutineUpdatePayload = TypeOf<typeof routineUpdatePayloadSchema>

export { routineUpdatePayloadSchema }
export type { RoutineUpdatePayload }
