import { Route } from 'components'
import { paths } from 'config'
import { useStoreState } from 'hooks'
import { Navigate, useParams } from 'react-router-dom'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'
import { groupElementsByStatus } from './utils'
import { groupElementsByContextId } from 'utils'

const RoutineDetails = () => {
  const { routineId } = useParams()
  const storeState = useStoreState()

  if (!routineId) {
    return <Navigate to={`/${paths.routines.core}`} />
  }

  const routine = storeState.getRoutinesById(routineId)
  if (!routine) {
    return <Navigate to={`/${paths.routines.core}`} />
  }

  const routineTasks = storeState.getActiveTasksByRoutineId(routineId)
  const routineTasksByStatus = groupElementsByStatus(routineTasks)
  const routineTasksByContext = groupElementsByContextId(routineTasks)

  const inProgressTasks =
    routineTasksByStatus.find((s) => s.groupName === 'IN_PROGRESS')?.elements ??
    []
  const hasAnyTasksInProgress = Boolean(inProgressTasks.length)

  const shouldGroupByContext = storeState.getSettingsById(
    'GROUP_ROUTINE_DETAILS_LIST_BY_CONTEXT'
  )?.value
  const groupedTasks = shouldGroupByContext
    ? routineTasksByContext
    : routineTasksByStatus

  return (
    <Route>
      <Header
        hasAnyTasksInProgress={hasAnyTasksInProgress}
        name={routine.name}
        score={routine.score}
      />

      <Body pastRuns={routine.pastRuns} groupedTasks={groupedTasks} />

      <Footer hasAnyTasksInProgress={hasAnyTasksInProgress} />
    </Route>
  )
}

export default RoutineDetails
