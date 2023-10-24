import { Id, RoutinesState, SingleRoutine } from 'schemas'
import { updateReducerTemplate } from 'store/reducer/_generics'

const update = updateReducerTemplate<
  SingleRoutine,
  RoutinesState,
  RoutineUpdatePayload
>

type RoutineUpdatePayload = {
  id: Id
  update: Partial<Omit<SingleRoutine, 'id'>>
}

export default update
