import { Route } from 'components'
import { paths } from 'config'
import { useStoreState } from 'hooks'
import { Navigate, useLocation } from 'react-router-dom'
import { Body, Header, NoTasks } from './components'

const Pilot = () => {
  const { state } = useLocation()
  const storeState = useStoreState()
  const { routineId } = state

  if (!routineId) {
    return <Navigate to={'/' + paths.routines.children.index.absolute} />
  }

  const routine = storeState.getRoutinesById(routineId)
  if (!routine) {
    return <Navigate to={'/' + paths.routines.children.index.absolute} />
  }

  const tasks = storeState
    .getTasksByRoutineId(routineId)
    .filter((t) => t.routineMeta?.status === 'IN_PROGRESS')
  const tasksLen = tasks.length
  const hasTasks = !!tasksLen

  return (
    <Route>
      <Header routineId={routineId} />

      {hasTasks ? <Body routineId={routineId} tasks={tasks} /> : <NoTasks />}
    </Route>
  )
}

export default Pilot
