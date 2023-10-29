/* eslint-disable @typescript-eslint/no-magic-numbers */
import { UseStoreState } from 'hooks/useStoreState'
import { ScheduleTaskStepData, SingleTask } from 'schemas'

const getInitialTaskData = (
  tasks: Array<SingleTask>,
  storeState: UseStoreState
): Array<ScheduleTaskStepData> =>
  tasks
    .map(
      (t): ScheduleTaskStepData => ({
        completionInSeconds: 0,
        contextName: t.contextId
          ? storeState.getContextsById(t.contextId)?.name
          : undefined,
        durationInSeconds: t.durationInSeconds,
        id: t.id,
        index: t.index,
        isDone: false,
        isFailed: false,
        isFirstInContext: false,
        isLastInContext: false,
        isSkipped: false,
        name: t.name,
      })
    )
    .sort((prev, next) => (prev.index < next.index ? -1 : 1))

export default getInitialTaskData
