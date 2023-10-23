import { ElementList } from 'components'
import { useStoreState } from 'hooks'
import { FC } from 'react'
import { RoutineListFilters } from 'schemas'
import Routine from './Routine'

type Props = {
  filters: RoutineListFilters
}

const Body: FC<Props> = ({ filters }) => {
  const storeState = useStoreState()
  const routines = storeState.getRoutinesByStatus(filters.status)

  return (
    <ElementList
      elements={routines}
      emptyStateMessage="No routines yet :("
      renderElement={(r) => <Routine key={r.id} routine={r} />}
    />
  )
}

export default Body
