import { RoutineUpdatePayload, RoutinesState, SingleRoutine } from 'schemas'
import { updateReducerGeneric } from 'store/reducer/_generics'

const update = updateReducerGeneric<
  SingleRoutine,
  RoutinesState,
  RoutineUpdatePayload
>

export default update
