import { Stack, Typography } from '@mui/joy'
import { Navigate, useParams } from 'react-router-dom'
import { EmptyState, HeaderGeneric } from '../../../../components'
import { useStoreState } from '../../../../store'
import { routes } from '../../../../types'
import Route from '../../Route'
import Options from './Options'
import RoutineTask from './RoutineTask'
import {
  RoutineMetaStatus,
  routineMetaStatuses,
} from '../../../../store/reducers/tasks/types'

const RoutineDetails = () => {
  const { routineId } = useParams()
  const storeState = useStoreState()

  if (!routineId) {
    return <Navigate to={'/' + routes.routines.core} />
  }

  const thisRoutine = storeState.routines.find((r) => r.id === routineId)
  if (!thisRoutine) {
    return <Navigate to={'/' + routes.routines.core} />
  }

  const thisRoutineTasks = storeState.tasks.filter(
    (t) => t.routineId === routineId
  )
  const hasRoutineTasks = !!thisRoutineTasks.length

  return (
    <Route>
      <HeaderGeneric
        left={{
          type: 'TEXT',
          level: 'h2',
          content: thisRoutine.name,
        }}
        right={{
          type: 'COMPONENT',
          content: <Options />,
        }}
      />

      <Stack spacing={2}>
        {hasRoutineTasks ? (
          routineMetaStatuses.map((s) => {
            const thisStatusTasks = thisRoutineTasks.filter(
              (t) => t.routineId && t.routineMeta.status === s
            )
            const hasStatusTasks = !!thisStatusTasks.length
            if (!hasStatusTasks) {
              return null
            }

            const info = statusToInfoMapping[s]

            return (
              <Stack key={s} spacing={1}>
                <Stack>
                  <Typography level="title-sm">{s}</Typography>
                  <Typography level="body-xs">{info}</Typography>
                </Stack>

                <Stack spacing={1}>
                  {thisStatusTasks.map((routineTask, i) => (
                    <RoutineTask routineTask={routineTask} key={i} />
                  ))}
                </Stack>
              </Stack>
            )
          })
        ) : (
          <EmptyState message="No tasks :(" />
        )}
      </Stack>
    </Route>
  )
}

const statusToInfoMapping: Record<RoutineMetaStatus, string> = {
  IN_PROGRESS: 'TODO',
  NEW: 'Here are tasks awaiting to enter this routine',
}

export default RoutineDetails
