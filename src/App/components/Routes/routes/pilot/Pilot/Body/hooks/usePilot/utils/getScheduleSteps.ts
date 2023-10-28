/* eslint-disable @typescript-eslint/no-magic-numbers */
import { ScheduleStep, ScheduleTaskStepData, SingleRoutine } from 'schemas'

const getScheduleSteps = (
  initialTaskData: Array<ScheduleTaskStepData>,
  routineName: SingleRoutine['name']
): Array<ScheduleStep> => {
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

  return scheduleSteps
}

export default getScheduleSteps
