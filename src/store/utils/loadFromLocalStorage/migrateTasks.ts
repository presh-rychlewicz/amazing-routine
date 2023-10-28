/* eslint-disable @typescript-eslint/no-magic-numbers */
import { TasksState, tasksStateSchema } from 'schemas'

const migrateTasks = (rawTasks: any): TasksState => {
  let newTasks: TasksState = rawTasks

  switch (rawTasks.version) {
    case undefined:
      newTasks = {
        ...rawTasks,
        version: 1,
      }
      break

    case 1:
      newTasks = {
        ...rawTasks,
        version: 2,
      }
      break

    case 2:
      newTasks = {
        ...rawTasks,
        value: rawTasks.value.map((t: any) => ({
          ...t,
          score: 0,
        })),
        version: 3,
      }
      break

    case 3:
      newTasks = {
        ...rawTasks,
        value: rawTasks.value.map((t: any) => ({
          ...t,
          contextId: undefined,
        })),
        version: 4,
      }
      break

    case 4:
      newTasks = {
        ...rawTasks,
        value: rawTasks.value.map((t: any, index: number) => ({
          ...t,
          index,
        })),
        version: 5,
      }
      break
  }

  const parsingStatus = tasksStateSchema.safeParse(newTasks)
  if (parsingStatus.success) {
    return parsingStatus.data
  } else {
    return migrateTasks(newTasks)
  }
}

export default migrateTasks
