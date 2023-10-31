import { DialogModalGeneric, Route } from 'components'
import { paths } from 'config'
import { useModal, useNavigate, useWakeLock } from 'hooks'
import { Navigate, useLocation } from 'react-router-dom'
import { Id, ScheduleTaskStepData } from 'schemas'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

const Summary = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { isModalVisible, setIsModalVisible } = useModal()
  const { turnOff } = useWakeLock()

  const taskData: Array<ScheduleTaskStepData> | undefined = state?.taskData
  const routineId: Id | undefined = state?.routineId
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
        onConfirm={async () => {
          await turnOff()
          navigate(paths.dashboard.core)
        }}
        message="Are you sure you want to leave without saving result?"
        confirmButtonLabel="Yes"
      />
    </>
  )
}

export default Summary
