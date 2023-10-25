import { Route } from 'components'
import { paths } from 'config'
import { useStoreState } from 'hooks'
import { Navigate, useParams } from 'react-router-dom'
import Body from './Body'
import Header from './Header'
import { getStatusData } from './utils'
import Footer from './Footer'

const RoutineDetails = () => {
  const { routineId } = useParams()
  const storeState = useStoreState()

  if (!routineId) {
    return <Navigate to={'/' + paths.routines.core} />
  }

  const thisRoutine = storeState.getRoutinesById(routineId)
  if (!thisRoutine) {
    return <Navigate to={'/' + paths.routines.core} />
  }

  const routineTasks = storeState.getActiveTasksByRoutineId(routineId)
  const statusData = getStatusData(routineTasks)

  const inProgressTasks =
    statusData.find((s) => s.status === 'IN_PROGRESS')?.tasks ?? []
  const hasAnyTasksInProgress = Boolean(inProgressTasks.length)

  return (
    <Route>
      <Header
        name={thisRoutine.name}
        score={thisRoutine.score}
        statusData={statusData}
      />

      <Body pastRuns={thisRoutine.pastRuns} statusData={statusData} />

      <Footer hasAnyTasksInProgress={hasAnyTasksInProgress} />
    </Route>
  )
}

export default RoutineDetails
