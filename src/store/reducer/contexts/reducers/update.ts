import { ContextsState, Id, SingleContext } from 'schemas'
import { updateReducerTemplate } from 'store/reducer/_generics'

const update = updateReducerTemplate<
  SingleContext,
  ContextsState,
  ContextUpdatePayload
>

type ContextUpdatePayload = {
  id: Id
  update: Partial<Omit<SingleContext, 'id'>>
}

export default update
