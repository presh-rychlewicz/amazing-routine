/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { MISSING_CONTEXT_VALUE, paths } from 'config'
import { useModal, useNavigate, useTTS } from 'hooks'
import { useEffect, useState } from 'react'
import { ScheduleStep, SingleRoutine, SingleTask } from 'schemas'
import { getDurationString } from 'utils'
import { EndDecisionModalProps } from '../../EndDecisionModal'
import { ListProps } from '../../List'
import { MainProps } from '../../Main'
import useGetInitialTaskData from './useGetInitialTaskData'
import { getStepPrompt, modifyStepDataElementById } from './utils'

const usePilot = (
  tasks: Array<SingleTask>,
  routineId: SingleRoutine['id'],
  routineName: SingleRoutine['name']
): usePilotReturn => {
  const navigate = useNavigate()
  const { speak } = useTTS()

  const initialTaskData = useGetInitialTaskData(tasks)
  const scheduleSteps: Array<ScheduleStep> = [
    {
      data: {
        durationInSeconds: 10,
        durationInSecondsTotal: initialTaskData.reduce(
          (acc, curr) => acc + (curr.durationInSeconds ?? 0),
          0
        ),
        id: 'INTRO',
        isDone: false,
        name: 'Intro',
        routineName,
        taskCount: initialTaskData.length,
      },
      type: 'INTRO',
    },

    ...initialTaskData.map(
      (t): ScheduleStep => ({
        data: t,
        type: 'TASK',
      })
    ),

    {
      data: {
        durationInSeconds: 10,
        id: 'OUTRO',
        isDone: false,
        name: 'Outro',
      },
      type: 'OUTRO',
    },
  ]

  const [elapsedTime, setElapsedTime] = useState(0)
  const [taskData] = useState(initialTaskData)
  const [stepData, setStepData] = useState(scheduleSteps)
  const [isPlaying, setIsPlaying] = useState(true)

  const { isModalVisible: isListVisible, setIsModalVisible: setIsListVisible } =
    useModal()
  const {
    isModalVisible: isEndDecisionModalVisible,
    setIsModalVisible: setIsEndDecisionModalVisible,
  } = useModal()

  const stepDataToDo = stepData.filter((t) => {
    if (t.type === 'TASK') {
      return !t.data.isDone && !t.data.isSkipped && !t.data.isFailed
    }

    return !t.data.isDone
  })
  const tasksDataSkipped = stepData.filter((t) => {
    if (t.type === 'TASK') {
      return !t.data.isDone && t.data.isSkipped
    }

    return false
  })

  const [currentStep] = stepDataToDo

  // TODO: Autoskip
  // useEffect(() => {
  //   if (
  //     currentStep.type === 'INTRO' &&
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

  const onEnd = () =>
    navigate(paths.pilot.children.summary.absolute, undefined, {
      routineId,
      taskData,
    })

  const isIntro = currentStep.type === 'INTRO'
  const isTask = currentStep.type === 'TASK'
  const isOutro = currentStep.type === 'OUTRO'

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
  const stepName = isTask
    ? currentStep?.data.name
    : isIntro
    ? `${currentStep.data.taskCount} tasks`
    : currentStep.data.name
  const subtitle = isTask
    ? currentStep.data.contextName ?? MISSING_CONTEXT_VALUE
    : isIntro
    ? `${getDurationString(currentStep.data.durationInSecondsTotal)}`
    : undefined
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
      taskData,
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
