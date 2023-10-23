import { ElementList } from 'components'
import { useStoreState } from 'hooks'
import { FC } from 'react'
import { TaskListFilters } from 'schemas'
import Task from './Task'

type Props = {
  filters: TaskListFilters
}

const Body: FC<Props> = ({ filters }) => {
  const storeState = useStoreState()
  const tasks = storeState.getTasksByStatus(filters.status)
  console.log(tasks)

  let visibleTasks = tasks
  // TODO: create reducer
  if (filters.shouldShowTasksWithoutRoutine) {
    visibleTasks = tasks.filter((t) => !t.routineId)
  }

  return (
    <ElementList
      elements={visibleTasks}
      emptyStateMessage="No tasks yet :("
      renderElement={(t) => <Task key={t.id} task={t} />}
    />
  )
}

export default Body
