import { Route } from 'components'
import { paths } from 'config'
import { Navigate, useLocation } from 'react-router-dom'
import { Body, Footer, Header } from './components'
import { SingleRoutine, TaskDataElem } from 'schemas'

const Summary = () => {
  const { state } = useLocation()

  const taskData: Array<TaskDataElem> | undefined = state?.taskData
  const routineId: SingleRoutine['id'] | undefined = state?.routineId
  if (!taskData || !routineId) {
    return <Navigate to={'/' + paths.routines.core} />
  }

  return (
    <Route>
      <Header />

      <Body taskData={taskData} />

      <Footer routineId={routineId} />
    </Route>
  )
}

export default Summary
