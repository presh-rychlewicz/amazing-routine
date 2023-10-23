import { Route } from 'components'
import { useFilters } from 'hooks'
import { TaskListFilters, singleTaskStatusEnum } from 'schemas'
import { Body, Header } from './components'

const TaskList = () => {
  const { filters, setFilters } = useFilters(initialFiltersState)

  return (
    <Route>
      <Header filters={filters} setFilters={setFilters} />

      <Body filters={filters} />
    </Route>
  )
}

const initialFiltersState: TaskListFilters = {
  shouldShowTasksWithoutRoutine: false,
  status: [singleTaskStatusEnum.enum.ACTIVE],
}

export default TaskList
