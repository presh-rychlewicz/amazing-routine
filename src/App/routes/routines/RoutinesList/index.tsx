import { Stack } from '@mui/joy'
import { FC, useState } from 'react'
import { EmptyState } from '../../../../components'
import { useStoreState } from '../../../../store'
import {
  SingleRoutine,
  singleRoutineStatuses,
} from '../../../../store/reducers/routines/types'
import Route from '../../Route'
import Header from './Header'
import Routine from './Routine'

const RoutinesList: FC = () => {
  const storeState = useStoreState()
  const [selectedStatuses, setSelectedStatuses] = useState<SelectedStatuses>(
    singleRoutineStatuses.filter((a) => a === 'ACTIVE') as Writeable<
      typeof singleRoutineStatuses
    >
  )

  const disibleRoutines = storeState.routines.filter((r) =>
    selectedStatuses.includes(r.status)
  )
  const hasAnyRoutines = !!disibleRoutines.length
  const shouldShowStatus = selectedStatuses.length > 1

  return (
    <Route>
      <Header
        selectedStatuses={selectedStatuses}
        setSelectedStatuses={setSelectedStatuses}
      />

      {hasAnyRoutines ? (
        <Stack spacing={1}>
          {disibleRoutines.map((routine) => (
            <Routine
              key={routine.id}
              shouldShowStatus={shouldShowStatus}
              routine={routine}
            />
          ))}
        </Stack>
      ) : (
        <EmptyState message="No routines yet :(" />
      )}
    </Route>
  )
}

type Writeable<T> = { -readonly [P in keyof T]: T[P] }
export type SelectedStatuses = Array<SingleRoutine['status']>

export default RoutinesList
