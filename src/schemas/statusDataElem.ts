import { TypeOf, array, boolean, object, enum as zEnum } from 'zod'
import { singleTaskSchema } from './singleTask'

const statusDataElemSchema = object({
  hasTasks: boolean(),
  status: zEnum(['IN_PROGRESS', 'NEW']),
  tasks: array(singleTaskSchema),
})
type StatusDataElem = TypeOf<typeof statusDataElemSchema>

export type { StatusDataElem }
