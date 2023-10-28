import { ScheduleStep } from 'schemas'
import getIsStepTask from './getIsStepTask'

const getTasksDataSkipped = (stepData: Array<ScheduleStep>) =>
  stepData.filter((t) => {
    if (getIsStepTask(t)) {
      return !t.data.isDone && t.data.isSkipped
    }

    return false
  })

export default getTasksDataSkipped
