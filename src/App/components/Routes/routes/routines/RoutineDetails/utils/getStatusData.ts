import { SingleTask, StatusDataElem, routineMetaStatusSchema } from 'schemas'

const getStatusData = (tasksArray: Array<SingleTask>) =>
  routineMetaStatusSchema.options
    .map((status): StatusDataElem => {
      const tasks = tasksArray
        .filter((t) => t.routineMeta && t.routineMeta.status === status)
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        .sort((prev, next) => (prev.index > next.index ? 1 : -1))
      const hasTasks = !!tasks.length

      return {
        hasTasks,
        status,
        tasks,
      }
    })
    .filter((s) => s.hasTasks)

export default getStatusData
