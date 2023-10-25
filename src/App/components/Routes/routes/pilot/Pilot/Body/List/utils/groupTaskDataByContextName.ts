import { TaskDataElem } from 'schemas'
import groupBy from 'lodash.groupby'

const groupTaskDataByContextName = (taskData: Array<TaskDataElem>) =>
  Object.entries(groupBy(taskData, 'contextName')).map(([name, tasks]) => ({
    name,
    tasks,
  }))

export default groupTaskDataByContextName
