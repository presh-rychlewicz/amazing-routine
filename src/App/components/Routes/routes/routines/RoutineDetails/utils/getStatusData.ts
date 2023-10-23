import { SingleTask, StatusDataElem, routineMetaStatusSchema } from 'schemas'

const getStatusData = (tasksArray: Array<SingleTask>) =>
  routineMetaStatusSchema.options
    .map((status): StatusDataElem => {
      const tasks = tasksArray.filter(
        (t) => t.routineMeta && t.routineMeta.status === status
      )
      const hasTasks = !!tasks.length

      return {
        hasTasks,
        status,
        tasks,
      }
    })
    .filter((s) => s.hasTasks)

export default getStatusData
