import { DialogModalGeneric, Route } from 'components'
import { paths } from 'config'
import { Navigate, useLocation } from 'react-router-dom'
import { SingleRoutine, ScheduleTaskStepData } from 'schemas'
import { useModal, useNavigate } from 'hooks'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const Summary = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { isModalVisible, setIsModalVisible } = useModal()

  const taskData: Array<ScheduleTaskStepData> | undefined = state?.taskData
  const routineId: SingleRoutine['id'] | undefined = state?.routineId
  if (!taskData || !routineId) {
    return <Navigate to={`/${paths.routines.core}`} />
  }

  const onExit = () => setIsModalVisible(true)

  return (
    <>
      <Route>
        <Header onExit={onExit} />

        <Body taskData={taskData} />

        <Footer taskData={taskData} onExit={onExit} routineId={routineId} />
      </Route>

      <DialogModalGeneric
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        onConfirm={() => navigate(paths.dashboard.core)}
        message="Are you sure you want to leave without saving result?"
        confirmButtonLabel="Yes"
      />
    </>
  )
}

export default Summary
