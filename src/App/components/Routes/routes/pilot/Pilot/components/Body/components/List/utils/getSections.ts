import { TaskDataElem } from 'schemas'

const getSections = (taskData: Array<TaskDataElem>) => [
  {
    name: 'Todo',
    tasks: taskData.filter((t) => !t.isDone && !t.isSkipped && !t.isFailed),
  },
  {
    name: 'Skipped',
    tasks: taskData.filter((t) => t.isSkipped),
  },
  {
    name: 'Failed',
    tasks: taskData.filter((t) => t.isFailed),
  },
  {
    name: 'Done',
    tasks: taskData.filter((t) => t.isDone),
  },
]

type Section = {
  name: string
  tasks: Array<TaskDataElem>
}

export default getSections
export type { Section }
