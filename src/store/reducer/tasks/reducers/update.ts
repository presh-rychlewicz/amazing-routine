import { Id, SingleTask, TasksState } from 'schemas'
import { updateReducerTemplate } from 'store/reducer/_generics'

const update = updateReducerTemplate<SingleTask, TasksState, TaskUpdatePayload>

type TaskUpdatePayload = {
  id: Id
  update: Partial<Omit<SingleTask, 'id'>>
}

export default update
