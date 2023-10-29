/* eslint-disable @typescript-eslint/no-magic-numbers */
import { TasksState, tasksStateSchema } from 'schemas'
import { getNewVersion } from './utils'

const migrateTasks = (rawTasks: any): TasksState => {
  let newTasks: TasksState = rawTasks

  const commonProps = {
    version: getNewVersion(rawTasks.version),
  }

  switch (rawTasks.version) {
    case undefined:
      newTasks = {
        ...rawTasks,
        ...commonProps,
      }
      break

    case 1:
      newTasks = {
        ...rawTasks,
        ...commonProps,
      }
      break

    case 2:
      newTasks = {
        ...rawTasks,
        ...commonProps,
        value: rawTasks.value.map((t: any) => ({
          ...t,
          score: 0,
        })),
      }
      break

    case 3:
      newTasks = {
        ...rawTasks,
        ...commonProps,
        value: rawTasks.value.map((t: any) => ({
          ...t,
          contextId: undefined,
        })),
      }
      break

    case 4:
      newTasks = {
        ...rawTasks,
        ...commonProps,
        value: rawTasks.value.map((t: any, index: number) => ({
          ...t,
          index,
        })),
      }
      break

    case 5:
      newTasks = {
        ...rawTasks,
        ...commonProps,
        value: rawTasks.value.map((t: any) => ({
          ...t,
          runs: [],
        })),
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
