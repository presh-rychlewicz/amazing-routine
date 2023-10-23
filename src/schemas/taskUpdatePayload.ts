import { SingleTask } from './singleTask'

// TODO
// const taskUpdatePayloadSchema = object({
// id: string(),
// })

type TaskUpdatePayload = {
  id: SingleTask['id']
  update: Partial<Omit<SingleTask, 'id'>>
}

export type { TaskUpdatePayload }
