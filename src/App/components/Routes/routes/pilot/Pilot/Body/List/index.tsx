import { DrawerWrapper, ElementList } from 'components'
import { FC } from 'react'
import { Id, TaskDataElem } from 'schemas'
import groupTaskDataByContextName from './utils/groupTaskDataByContextName'
import ListTask from './ListTask'

type Props = {
  taskData: Array<TaskDataElem>
  isListVisible: boolean
  onClose: () => void
  currentTaskId: Id
}

const List: FC<Props> = ({
  currentTaskId,
  taskData,
  isListVisible,
  onClose,
}) => {
  const groups = groupTaskDataByContextName(taskData)

  return (
    <DrawerWrapper open={isListVisible} onClose={onClose}>
      <ElementList
        spacingBetweenElements="medium"
        elements={groups}
        renderElement={({ name, tasks }) => (
          <ElementList
            shouldShowEmptyState={false}
            key={name}
            title={name}
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
        )}
      />
    </DrawerWrapper>
  )
}

export default List
