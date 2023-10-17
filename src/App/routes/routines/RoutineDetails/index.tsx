import { Navigate, useParams } from 'react-router-dom'
import { Route } from '../../../../components'
import { useStoreState } from '../../../../store'
import { routes } from '../../../../types'
import Body from './Body'
import Header from './Header'
import { getStatusData } from './utils'

const RoutineDetails = () => {
  const { routineId } = useParams()
  const storeState = useStoreState()

  if (!routineId) {
    return <Navigate to={'/' + routes.routines.children.index.absolute} />
  }

  const thisRoutine = storeState.getRoutinesById(routineId)
  if (!thisRoutine) {
    return <Navigate to={'/' + routes.routines.children.index.absolute} />
  }

  const routineTasks = storeState.getTasksByRoutineId(routineId)
  const statusData = getStatusData(routineTasks)

  return (
    <Route>
      <Header routineName={thisRoutine.name} statusData={statusData} />

      <Body statusData={statusData} hasTasks={!!routineTasks.length} />
    </Route>
  )
}

export default RoutineDetails
