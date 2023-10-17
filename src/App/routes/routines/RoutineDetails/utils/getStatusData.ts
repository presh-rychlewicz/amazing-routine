import {
  SingleTask,
  routineMetaStatuses,
} from '../../../../../store/reducers/tasks/types'

const getStatusData = (tasksArray: Array<SingleTask>) =>
  routineMetaStatuses.map((status): StatusDataElem => {
    const tasks = tasksArray.filter(
      (t) => t.routineId && t.routineMeta.status === status
    )
    const hasTasks = !!tasks.length

    return {
      hasTasks,
      status,
      tasks,
    }
  })

type StatusDataElem = {
  hasTasks: boolean
  status: 'IN_PROGRESS' | 'NEW'
  tasks: Array<SingleTask>
}

export default getStatusData
export type { StatusDataElem }
