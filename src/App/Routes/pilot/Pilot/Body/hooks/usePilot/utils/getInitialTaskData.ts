import { MISSING_CONTEXT_VALUE, ONE } from 'config'
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
        contextId: t.contextId,
        contextName:
          (t.contextId && storeState.getContextsById(t.contextId)?.name) ||
          MISSING_CONTEXT_VALUE,
        durationInSeconds: t.durationInSeconds,
        id: t.id,
        // TODO
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        index: t.routineMeta?.index!,
        isDone: false,
        isFailed: false,
        isFirstInContext: false,
        isLastInContext: false,
        isSkipped: false,
        name: t.name,
      })
    )
    .sort((prev, next) => (prev.index < next.index ? -ONE : ONE))

export default getInitialTaskData
