import { ScheduleTaskStepData } from 'schemas'

// TODO: move to component
const getTaskDataSections = (
  taskData: Array<ScheduleTaskStepData>
): Array<Section> => [
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
  tasks: Array<ScheduleTaskStepData>
}

export default getTaskDataSections
