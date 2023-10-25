import { useStoreState } from 'hooks'
import { SingleTask, TaskDataElem } from 'schemas'

const useGetInitialTaskData = (tasks: Array<SingleTask>) => {
  const storeState = useStoreState()

  return tasks
    .map((t, index, aray): TaskDataElem => {
      let contextName = 'Missing context'
      if (t.contextId) {
        const context = storeState.getContextsById(t.contextId)
        if (context) {
          contextName = context.name
        }
      }

      return {
        completionSeconds: 0,
        contextName,
        durationInSeconds: t.durationInSeconds,
        id: t.id,
        index: t.index,
        isDone: false,
        isFailed: false,
        isFirst: index === 0,
        isLast: index === aray.length - 1,
        isSkipped: false,
        name: t.name,
      }
    })
    .sort((prev, next) => (prev.index < next.index ? -1 : 1))
}

export default useGetInitialTaskData
