import { ScheduleTaskStepData } from 'schemas'
import { MISSING_CONTEXT_VALUE } from 'config'

const groupTaskDataByContextName = (
  taskData: Array<ScheduleTaskStepData>
): Array<Entry> => {
  const contextGroups = taskData.reduce<Array<Entry>>((acc, curr, index) => {
    const contextName = curr.contextName ?? MISSING_CONTEXT_VALUE

    if (!index) {
      acc.push({
        name: contextName,
        tasks: [curr],
      })
    } else {
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      const lastContextIndex = acc.length - 1
      const lastContext = acc[lastContextIndex]
      const isSameContextAsLast = lastContext.name === contextName

      if (isSameContextAsLast) {
        acc[lastContextIndex] = {
          ...lastContext,
          tasks: [...lastContext.tasks, curr],
        }
      } else {
        acc.push({
          name: contextName,
          tasks: [curr],
        })
      }
    }

    return acc
  }, [])

  return contextGroups
}

type Entry = {
  name: string
  tasks: Array<ScheduleTaskStepData>
}

export default groupTaskDataByContextName
