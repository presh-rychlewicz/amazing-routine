import { ScheduleTaskStepData } from 'schemas'
import groupBy from 'lodash.groupby'

const groupTaskDataByContextName = (taskData: Array<ScheduleTaskStepData>) =>
  Object.entries(groupBy(taskData, 'contextName')).map(([name, tasks]) => ({
    name,
    tasks,
  }))

export default groupTaskDataByContextName
