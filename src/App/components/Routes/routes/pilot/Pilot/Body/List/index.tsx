import { DrawerWrapper, ElementList } from 'components'
import { FC } from 'react'
import { Id, ScheduleStep, TaskDataElem } from 'schemas'
import groupTaskDataByContextName from './utils/groupTaskDataByContextName'
import ListTask from './ListTask'
import { MISSING_CONTEXT_VALUE } from 'config'

type ListProps = {
  taskData: Array<TaskDataElem>
  stepData: Array<ScheduleStep>
  isListVisible: boolean
  onClose: () => void
  currentTaskId: Id | undefined
}

const List: FC<ListProps> = ({
  currentTaskId,
  taskData,
  isListVisible,
  onClose,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  stepData,
}) => (
  // const taskData2 = stepData.filter(s => s.type === 'TASK').map(s => s.data)

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

export default List
export type { ListProps }
