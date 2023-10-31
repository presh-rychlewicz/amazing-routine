/* eslint-disable @typescript-eslint/no-magic-numbers */
import { SingleTask, StatusDataElem, routineMetaStatusSchema } from 'schemas'

const getStatusData = (tasksArray: Array<SingleTask>) =>
  routineMetaStatusSchema.options
    .map((status): StatusDataElem => {
      const tasks = tasksArray
        .filter((t) => t.routineMeta && t.routineMeta.status === status)
        .sort((prev, next) => {
          if (!prev.routineMeta || !next.routineMeta) {
            return 0
          }

          return prev.routineMeta.index > next.routineMeta.index ? 1 : -1
        })
      const hasTasks = !!tasks.length

      return {
        hasTasks,
        status,
        tasks,
      }
    })
    .filter((s) => s.hasTasks)

export default getStatusData
