import { Route } from 'components'
import { paths } from 'config'
import { useStoreState } from 'hooks'
import { Navigate, useLocation } from 'react-router-dom'
import Body from './Body'
import Header from './Header'
import NoTasks from './NoTasks'

const Pilot = () => {
  const { state } = useLocation()
  const storeState = useStoreState()

  const redirect = <Navigate to={`/${paths.routines.core}`} />

  const routineId = state?.routineId
  if (!routineId) {
    return redirect
  }

  const routine = storeState.getRoutinesById(routineId)
  if (!routine) {
    return redirect
  }

  const tasks = storeState
    .getTasksByRoutineId(routineId)
    .filter((t) => t.routineMeta?.status === 'IN_PROGRESS')
  const hasTasks = !!tasks.length

  return (
    <Route shouldShowMenu={false}>
      <Header routineId={routineId} />

      {hasTasks ? (
        <Body routineName={routine.name} routineId={routineId} tasks={tasks} />
      ) : (
        <NoTasks />
      )}
    </Route>
  )
}

export default Pilot
