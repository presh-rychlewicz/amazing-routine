/* eslint-disable @typescript-eslint/no-magic-numbers */
import { paths } from 'config'
import { useModal, useNavigate, useTTS } from 'hooks'
import { useEffect, useState } from 'react'
import { ScheduleStep, SingleRoutine, SingleTask } from 'schemas'
import { EndDecisionModalProps } from '../../EndDecisionModal'
import { ListProps } from '../../List'
import { MainProps } from '../../Main'
import useGetInitialTaskData from './useGetInitialTaskData'
import {
  getCurrentStep,
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
  routineId: SingleRoutine['id'],
  routineName: SingleRoutine['name']
): usePilotReturn => {
  const navigate = useNavigate()
  const { speak } = useTTS()

  const initialTaskData = useGetInitialTaskData(tasks)
  const scheduleSteps: Array<ScheduleStep> = getScheduleSteps(
    initialTaskData,
    routineName
  )

  const [elapsedTime, setElapsedTime] = useState(0)
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

  const isIntro = getIsStepIntro(currentStep)
  const isTask = getIsStepTask(currentStep)
  const isOutro = getIsStepOutro(currentStep)

  useEffect(() => {
    if (isOutro) {
      if (tasksDataSkipped.length) {
        setIsEndDecisionModalVisible(true)
      } else {
        onEnd()
      }
    }
  }, [navigate, isOutro, tasksDataSkipped, currentStep])

  const durationInSeconds = currentStep.data.durationInSeconds ?? 0
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
          if (isIntro) {
            await speak("Let's start!")

            modifyStepDataElementById(currentStep.data.id, setStepData, {
              isDone: true,
            })
          }

          if (isTask) {
            await speak('Well done')

            modifyStepDataElementById(currentStep.data.id, setStepData, {
              completionSeconds: Math.round(elapsedTime),
              isDone: true,
            })
          }

          if (isOutro) {
            await speak("Let's start!")

            modifyStepDataElementById(currentStep.data.id, setStepData, {
              isDone: true,
            })
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

type usePilotReturn = {
  endDecisionModalProps: EndDecisionModalProps
  mainProps: MainProps
  listProps: ListProps
}

export default usePilot
