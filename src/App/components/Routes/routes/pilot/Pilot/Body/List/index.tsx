import { DrawerWrapper, ElementList } from 'components'
import { FC } from 'react'
import { Id, ScheduleStep, ScheduleTaskStepData } from 'schemas'
import groupTaskDataByContextName from './utils/groupTaskDataByContextName'
import ListTask from './ListTask'
import { MISSING_CONTEXT_VALUE } from 'config'
import { getIsStepTask } from '../hooks/usePilot/utils'

type ListProps = {
  stepData: Array<ScheduleStep>
  isListVisible: boolean
  onClose: () => void
  currentTaskId: Id | undefined
}

const List: FC<ListProps> = ({
  currentTaskId,
  isListVisible,
  onClose,
  stepData,
}) => {
  const taskData = stepData
    .filter(getIsStepTask)
    .map((s) => s.data as ScheduleTaskStepData)

  return (
    <DrawerWrapper open={isListVisible} onClose={onClose}>
      <ElementList
        spacingBetweenElements="medium"
        elements={groupTaskDataByContextName(taskData)}
        renderElement={({ name, tasks }) => {
          const visibleContextName =
            name === 'undefined' ? MISSING_CONTEXT_VALUE : name

          return (
            <ElementList
              shouldShowEmptyState={false}
              key={visibleContextName}
              title={visibleContextName}
              elements={tasks}
              renderElement={(task) => (
                <ListTask
                  isCurrent={task.id === currentTaskId}
                  isFailed={task.isFailed}
                  isSkipped={task.isSkipped}
                  key={task.id}
                  durationInSeconds={task.durationInSeconds}
                  name={task.name}
                  isDone={task.isDone}
                />
              )}
            />
          )
        }}
      />
    </DrawerWrapper>
  )
}

export default List
export type { ListProps }
