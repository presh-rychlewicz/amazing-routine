import { SingleTask, TaskUpdatePayload, TasksState } from 'schemas'
import { updateReducerGeneric } from 'store/reducer/_generics'

const update = updateReducerGeneric<SingleTask, TasksState, TaskUpdatePayload>

export default update
