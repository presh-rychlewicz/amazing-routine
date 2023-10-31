import { paths } from 'config'
import { useModal, useNavigate, useStoreState, useTTS } from 'hooks'
import { useEffect, useState } from 'react'
import { Id, ScheduleStep, SingleRoutine, SingleTask } from 'schemas'
import { EndDecisionModalProps } from '../../EndDecisionModal'
import { ListProps } from '../../List'
import { MainProps } from '../../Main'
import {
  getCurrentStep,
  getInitialTaskData,
  getIsStepIntro,
  getIsStepOutro,
  getIsStepTask,
  getScheduleSteps,
  getStepDataToDo,
  getStepName,
  getStepPrompt,
  getSubtitle,
  getTasksDataSkipped,
  modifyStepDataElementById,
} from './utils'

const usePilot = (
  tasks: Array<SingleTask>,
  routineId: Id,
  routineName: SingleRoutine['name']
): usePilotReturn => {
  const storeState = useStoreState()
  const navigate = useNavigate()
  const { speak } = useTTS()

  const initialTaskData = getInitialTaskData(tasks, storeState)
  const scheduleSteps: Array<ScheduleStep> = getScheduleSteps(
    initialTaskData,
    routineName
  )

  const [elapsedTime, setElapsedTime] = useState(INITIAL_ELAPSED_TIME)
  const [stepData, setStepData] = useState(scheduleSteps)
  const [isPlaying, setIsPlaying] = useState(true)

  const { isModalVisible: isListVisible, setIsModalVisible: setIsListVisible } =
    useModal()
  const {
    isModalVisible: isEndDecisionModalVisible,
    setIsModalVisible: setIsEndDecisionModalVisible,
  } = useModal()

  const stepDataToDo = getStepDataToDo(stepData)
  const tasksDataSkipped = getTasksDataSkipped(stepData)
  const currentStep = getCurrentStep(stepDataToDo)

  const isTask = getIsStepTask(currentStep)

  // TODO: Autoskip
  // useEffect(() => {
  //   if (
  //     getIsStepIntro(currentStep) &&
  //     currentStep.data.durationInSeconds === elapsedTime &&
  //     !currentStep.data.isDone
  //   ) {
  //     modifyStepDataElementById('INTRO', setStepData, { isDone: true })
  //   }
  // }, [currentStep, elapsedTime])

  useEffect(() => {
    if (isTask) {
      const currDurationInSeconds = currentStep.data.durationInSeconds

      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      if (currDurationInSeconds && currDurationInSeconds / 2 === elapsedTime) {
        speak('Half time')
      }

      if (currDurationInSeconds && currDurationInSeconds === elapsedTime) {
        speak('Time is up')
      }
    }
  }, [elapsedTime, currentStep, isTask])

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      if (currentStep) {
        const prompt = getStepPrompt(currentStep)

        await speak(prompt)
      }
    })()
  }, [currentStep])

  const onEnd = () => {
    const taskData = stepData.filter(getIsStepTask).map((s) => s.data)

    return navigate(paths.pilot.children.summary.absolute, undefined, {
      routineId,
      taskData,
    })
  }

  useEffect(() => {
    const isOutro = getIsStepOutro(currentStep)

    if (isOutro) {
      if (tasksDataSkipped.length) {
        setIsEndDecisionModalVisible(true)
      } else {
        onEnd()
      }
    }
  }, [navigate, tasksDataSkipped, currentStep])

  const durationInSeconds =
    currentStep.data.durationInSeconds ?? DEFAULT_DURATION_IN_SECONDS
  const stepName = getStepName(currentStep)
  const subtitle = getSubtitle(currentStep)
  const { id } = currentStep.data

  return {
    endDecisionModalProps: {
      onEnd,
      open: isEndDecisionModalVisible,
    },
    listProps: {
      currentTaskId: currentStep.data.id,
      isListVisible,
      onClose: () => setIsListVisible(false),
      stepData,
    },
    mainProps: {
      clockProps: {
        durationInSeconds,
        id,
        isPlaying,
        setElapsedTime,
        stepName,
        subtitle,
      },
      controlsProps: {
        isDoneDisabled: (() => {
          if (!isPlaying) {
            return true
          }

          const isIntro = getIsStepIntro(currentStep)

          if (isTask || isIntro) {
            return currentStep.data.isDone
          }

          return false
        })(),
        isFailDisabled: !isPlaying || !isTask,
        isListDisabled: !isPlaying,
        isPlayOrPauseDisabled: false,
        isPlaying,
        isSkipDisabled:
          !isPlaying ||
          !(isTask && !currentStep.data.isSkipped && !currentStep.data.isDone),
        onDone: async () => {
          switch (currentStep.type) {
            case 'INTRO':
              {
                await speak("Let's start!")

                modifyStepDataElementById(currentStep.data.id, setStepData, {
                  isDone: true,
                })
              }
              break

            case 'TASK':
              {
                await speak('Well done')

                modifyStepDataElementById(currentStep.data.id, setStepData, {
                  completionInSeconds: Math.round(elapsedTime),
                  isDone: true,
                })
              }
              break

            case 'OUTRO':
              {
                // TODO
                // await speak("Let's start!")

                modifyStepDataElementById(currentStep.data.id, setStepData, {
                  isDone: true,
                })
              }
              break

            case 'CONTEXT': {
              // TODO
              // await speak("Let's start!")

              modifyStepDataElementById(currentStep.data.id, setStepData, {
                isDone: true,
              })
            }
          }
        },
        onFail: () => {
          if (isTask) {
            modifyStepDataElementById(currentStep.data.id, setStepData, {
              isFailed: true,
            })
          }
        },
        onPlayOrPauseClick: () => setIsPlaying((prev) => !prev),
        onSkip: () => {
          if (isTask) {
            modifyStepDataElementById(currentStep.data.id, setStepData, {
              isSkipped: true,
            })
          }
        },
        toggleList: () => setIsListVisible((prev) => !prev),
      },
    },
  }
}

const INITIAL_ELAPSED_TIME = 0
const DEFAULT_DURATION_IN_SECONDS = 0

type usePilotReturn = {
  endDecisionModalProps: EndDecisionModalProps
  mainProps: MainProps
  listProps: ListProps
}

export default usePilot
