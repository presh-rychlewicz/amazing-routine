import { Route } from 'components'
import { useFilters } from 'hooks'
import { FC } from 'react'
import { RoutineListFilters, singleRoutineStatusEnum } from 'schemas'
import { Body, Header } from './components'

const RoutineList: FC = () => {
  const { filters, setFilters } = useFilters(initialFiltersState)

  return (
    <Route>
      <Header filters={filters} setFilters={setFilters} />

      <Body filters={filters} />
    </Route>
  )
}

const initialFiltersState: RoutineListFilters = {
  status: [singleRoutineStatusEnum.enum.ACTIVE],
}

export default RoutineList
