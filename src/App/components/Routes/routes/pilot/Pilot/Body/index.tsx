import { FC, useEffect, useState } from 'react'
import { SingleRoutine, SingleTask } from 'schemas'
import { modifyTaskDataElementById } from './utils'

import { paths } from 'config'
import { useModal, useNavigate } from 'hooks'
import EndDecisionModal from './EndDecisionModal'
import List from './List'
import Main from './Main'
import { useGetInitialTaskData } from './hooks'

type Props = {
  tasks: Array<SingleTask>
  routineId: SingleRoutine['id']
}

const Body: FC<Props> = ({ tasks, routineId }) => {
  const navigate = useNavigate()
  const initialTaskData = useGetInitialTaskData(tasks)
  console.log(initialTaskData)

  const [elapsedTime, setElapsedTime] = useState(0)
  const [taskData, setTaskData] = useState(initialTaskData)
  const [isPlaying, setIsPlaying] = useState(true)
  const { isModalVisible: isListVisible, setIsModalVisible: setIsListVisible } =
    useModal()
  const {
    isModalVisible: isEndDecisionModalVisible,
    setIsModalVisible: setIsEndDecisionModalVisible,
  } = useModal()

  const tasksDataToDo = taskData.filter(
    (t) => !t.isDone && !t.isSkipped && !t.isFailed
  )
  const tasksDataSkipped = taskData.filter((t) => !t.isDone && t.isSkipped)

  const currentTask = tasksDataToDo[0]
  const duration = currentTask?.durationInSeconds ?? 0

  const onEnd = () =>
    navigate(paths.pilot.children.summary.absolute, undefined, {
      routineId,
      taskData,
    })

  useEffect(() => {
    if (!currentTask) {
      if (tasksDataSkipped.length) {
        setIsEndDecisionModalVisible(true)
      } else {
        onEnd()
      }
    }
  }, [navigate, currentTask, tasksDataSkipped])

  return (
    <>
      {isEndDecisionModalVisible && <EndDecisionModal onEnd={onEnd} />}

      {currentTask && (
        <Main
          toggleList={() => setIsListVisible((prev) => !prev)}
          onDone={() => {
            modifyTaskDataElementById(currentTask.id, setTaskData, {
              completionSeconds: Math.round(elapsedTime),
              isDone: true,
            })
          }}
          onSkip={() => {
            modifyTaskDataElementById(currentTask.id, setTaskData, {
              isSkipped: true,
            })
          }}
          onFail={() => {
            modifyTaskDataElementById(currentTask.id, setTaskData, {
              isFailed: true,
            })
          }}
          onPlayOrPauseClick={() => setIsPlaying((prev) => !prev)}
          duration={duration}
          isPlaying={isPlaying}
          currentTask={currentTask}
          setElapsedTime={setElapsedTime}
        />
      )}

      <List
        currentTaskId={currentTask.id}
        onClose={() => setIsListVisible(false)}
        isListVisible={isListVisible}
        taskData={taskData}
      />
    </>
  )
}

export default Body
