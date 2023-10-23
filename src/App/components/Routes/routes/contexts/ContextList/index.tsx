import { Route } from 'components'
import { useFilters } from 'hooks'
import { ContextsListFilters, singleTaskStatusEnum } from 'schemas'
import { Body, Header } from './components'

const ContextList = () => {
  const { filters, setFilters } = useFilters(initialFiltersState)

  return (
    <Route>
      <Header filters={filters} setFilters={setFilters} />

      <Body />
    </Route>
  )
}

const initialFiltersState: ContextsListFilters = {
  shouldShowTasksWithoutRoutine: false,
  status: [singleTaskStatusEnum.enum.ACTIVE],
}

export default ContextList
