import { FC, useState } from 'react'
import { Route } from '../../../../components'
import { useStoreState } from '../../../../store'
import {
  SingleRoutineStatuses,
  singleRoutineStatuses,
} from '../../../../store/reducers/routines/types'
import Body from './Body'
import Header from './Header'

const RoutinesList: FC = () => {
  const storeState = useStoreState()
  const [selectedStatuses, setSelectedStatuses] = useState<
    Array<SingleRoutineStatuses>
  >(
    // TODO: this doesn't make sense - status should become enum
    singleRoutineStatuses.filter((a) => a === 'ACTIVE') as Writeable<
      typeof singleRoutineStatuses
    >
  )

  const statusRoutines = storeState.getRoutinesByStatuses(selectedStatuses)
  const shouldShowStatus = selectedStatuses.length > 1

  return (
    <Route>
      <Header
        selectedStatuses={selectedStatuses}
        setSelectedStatuses={setSelectedStatuses}
      />

      <Body shouldShowStatus={shouldShowStatus} routines={statusRoutines} />
    </Route>
  )
}

type Writeable<T> = { -readonly [P in keyof T]: T[P] }

export default RoutinesList
