import { Stack } from '@mui/joy'
import { useStoreState } from '../../../../store'
import Route from '../../Route'
import Header from './Header'
import Task from './Task'
import { EmptyState } from '../../../../components'

const TasksList = () => {
  const storeState = useStoreState()
  const hasAnyTasks = !!storeState.tasks.length
  console.log(storeState.tasks)

  return (
    <Route>
      <Header />

      {hasAnyTasks ? (
        <Stack spacing={1}>
          {storeState.tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </Stack>
      ) : (
        <EmptyState message="No task yet :(" />
      )}
    </Route>
  )
}

export default TasksList
