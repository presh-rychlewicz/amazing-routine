import { Navigate, useLocation } from 'react-router-dom'
import { Route } from '../../../../components'
import { useStoreState } from '../../../../store'
import { routes } from '../../../../types'
import Body from './Body'
import Header from './Header'
import NoTasks from './NoTasks'

const Pilot = () => {
  const { state } = useLocation()
  const storeState = useStoreState()
  const { routineId } = state

  if (!routineId) {
    return <Navigate to={'/' + routes.routines.children.index.absolute} />
  }

  const routine = storeState.getRoutinesById(routineId)
  if (!routine) {
    return <Navigate to={'/' + routes.routines.children.index.absolute} />
  }

  const tasks = storeState
    .getTasksByRoutineId(routineId)
    .filter((t) => t.routineMeta?.status === 'IN_PROGRESS')
  const tasksLen = tasks.length
  const hasTasks = !!tasksLen

  return (
    <Route>
      <Header routineId={routineId} />

      {hasTasks ? <Body tasks={tasks} /> : <NoTasks />}
    </Route>
  )
}

export default Pilot
