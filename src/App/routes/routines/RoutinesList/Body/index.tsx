import { Stack } from '@mui/joy'
import { FC } from 'react'
import { EmptyState } from '../../../../../components'
import { SingleRoutine } from '../../../../../store/reducers/routines/types'
import Routine from './../Routine'

type Props = {
  routines: Array<SingleRoutine>
  shouldShowStatus: boolean
}

const Body: FC<Props> = ({ routines, shouldShowStatus }) => {
  const hasAnyRoutines = !!routines.length

  if (!hasAnyRoutines) {
    return <EmptyState message="No routines yet :(" />
  }

  return (
    <Stack spacing={1}>
      {routines.map((routine) => (
        <Routine
          key={routine.id}
          shouldShowStatus={shouldShowStatus}
          routine={routine}
        />
      ))}
    </Stack>
  )
}

export default Body
