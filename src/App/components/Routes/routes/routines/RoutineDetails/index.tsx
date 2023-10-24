import { Route } from 'components'
import { paths } from 'config'
import { useStoreState } from 'hooks'
import { Navigate, useParams } from 'react-router-dom'
import { Body, Header } from './components'
import { getStatusData } from './utils'

const RoutineDetails = () => {
  const { routineId } = useParams()
  const storeState = useStoreState()

  if (!routineId) {
    return <Navigate to={'/' + paths.routines.children.index.absolute} />
  }

  const thisRoutine = storeState.getRoutinesById(routineId)
  if (!thisRoutine) {
    return <Navigate to={'/' + paths.routines.children.index.absolute} />
  }

  const routineTasks = storeState.getActiveTasksByRoutineId(routineId)
  const statusData = getStatusData(routineTasks)

  return (
    <Route>
      <Header
        name={thisRoutine.name}
        score={thisRoutine.score}
        statusData={statusData}
      />

      <Body pastRuns={thisRoutine.pastRuns} statusData={statusData} />
    </Route>
  )
}

export default RoutineDetails
