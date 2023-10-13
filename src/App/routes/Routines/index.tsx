import { Stack, Typography } from '@mui/joy'
import { useState } from 'react'
import { useStoreState } from '../../../store/hooks'
import Header from './Header'
import SingleRoutine from './SingleRoutine'
import {
  SINGLE_ROUTINE_STATUSES,
  SingleRoutine as SingleRoutineType,
} from '../../../store/reducers/routines/types'
import { EmptyState } from '../../../components'

const Routines = () => {
  const { routines } = useStoreState()

  const [selectedStatuses, setSelectedStatuses] = useState<SelectedStatuses>(
    SINGLE_ROUTINE_STATUSES.filter((a) => a === 'ACTIVE') as Writeable<
      typeof SINGLE_ROUTINE_STATUSES
    >
  )

  const disibleRoutines = routines.filter((r) =>
    selectedStatuses.includes(r.status)
  )
  const hasAnyRoutines = !!disibleRoutines.length

  return (
    <Stack spacing={5} width="100%">
      <Typography level="body-xs">[ROUTINES VIEW]</Typography>

      <Header
        selectedStatuses={selectedStatuses}
        setSelectedStatuses={setSelectedStatuses}
      />

      <Stack spacing={2}>
        {hasAnyRoutines ? (
          disibleRoutines.map((routine) => (
            <SingleRoutine
              status={routine.status}
              id={routine.id}
              note={routine.note || undefined}
              key={routine.id}
              name={routine.name}
            />
          ))
        ) : (
          <EmptyState message="No routines yet :(" />
        )}
      </Stack>
    </Stack>
  )
}

type Writeable<T> = { -readonly [P in keyof T]: T[P] }
export type SelectedStatuses = Array<SingleRoutineType['status']>

export default Routines
