import { DrawerWrapper, ElementList } from 'components'
import { FC } from 'react'
import { Id, ScheduleStep, ScheduleTaskStepData } from 'schemas'
import { groupElementsByContextId } from 'utils'
import { getIsStepTask } from '../hooks/usePilot/utils'
import ListTask from './ListTask'

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
        elements={groupElementsByContextId(taskData)}
        renderElement={({ groupName, elements }, index) => (
          <ElementList
            shouldShowEmptyState={false}
            key={groupName + index}
            title={groupName}
            elements={elements}
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
        )}
      />
    </DrawerWrapper>
  )
}

export default List
export type { ListProps }
