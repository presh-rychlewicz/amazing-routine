import { FC, useEffect, useState } from 'react'
import { SingleRoutine, SingleTask } from 'schemas'
import { getInitialTaskData, modifyTaskDataElementById } from './utils'

import { paths } from 'config'
import { useNavigate } from 'hooks'
import { EndDecisionModal, List, Main } from './components'

type Props = {
  tasks: Array<SingleTask>
  routineId: SingleRoutine['id']
}

const Body: FC<Props> = ({ tasks, routineId }) => {
  const navigate = useNavigate()
  const initialTaskData = getInitialTaskData(tasks)

  const [elapsedTime, setElapsedTime] = useState(0)
  const [taskData, setTaskData] = useState(initialTaskData)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isListVisible, setIsListVisible] = useState(false)
  const [isEndDecisionModalVisible, setIsEndDecisionModalVisible] =
    useState(false)

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
        isListVisible={isListVisible}
        setIsListVisible={setIsListVisible}
        taskData={taskData}
      />
    </>
  )
}

export default Body
