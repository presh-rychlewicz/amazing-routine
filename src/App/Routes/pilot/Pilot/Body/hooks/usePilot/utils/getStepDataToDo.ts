import { ScheduleStep } from 'schemas'
import getIsStepTask from './getIsStepTask'

const getStepDataToDo = (stepData: Array<ScheduleStep>) =>
  stepData.filter((t) => {
    if (getIsStepTask(t)) {
      return !t.data.isDone && !t.data.isSkipped && !t.data.isFailed
    }

    return !t.data.isDone
  })

export default getStepDataToDo
