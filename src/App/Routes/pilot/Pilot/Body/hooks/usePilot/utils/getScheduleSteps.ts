/* eslint-disable @typescript-eslint/no-magic-numbers */
import { MISSING_CONTEXT_VALUE, ONE } from 'config'
import {
  ScheduleContextStep,
  ScheduleStep,
  ScheduleTaskStep,
  ScheduleTaskStepData,
  SingleRoutine,
} from 'schemas'

const getScheduleSteps = (
  initialTaskData: Array<ScheduleTaskStepData>,
  routineName: SingleRoutine['name']
): Array<ScheduleStep> => [
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

  ...initialTaskData
    .reduce<Array<ScheduleTaskStep | ScheduleContextStep>>((acc, curr) => {
      // @ts-ignore
      const indexOfPreviousContext = acc.findLastIndex(
        // @ts-ignore
        (s) => s.type === 'CONTEXT'
      )
      const previousContext = acc[indexOfPreviousContext]
      const hasPreviousContext = !!previousContext

      if (
        !hasPreviousContext ||
        curr.contextName !== previousContext.data.name
      ) {
        acc.push({
          data: {
            durationInSeconds: 30,
            id: crypto.randomUUID(),
            isDone: false,
            isFirst: !acc.some((s) => s.type === 'CONTEXT'),
            isLast: false,
            name: curr.contextName ?? MISSING_CONTEXT_VALUE,
          },
          type: 'CONTEXT',
        })
      }

      acc.push({
        data: curr,
        type: 'TASK',
      })

      return acc
    }, [])
    .flat()
    .map((s, index, aray): ScheduleTaskStep | ScheduleContextStep => {
      if (s.type === 'CONTEXT') {
        // @ts-ignore
        const indexOfLastContext = aray.findLastIndex(
          // @ts-ignore
          (s) => s.type === 'CONTEXT'
        )

        return {
          ...s,
          data: {
            ...s.data,
            isLast: index === indexOfLastContext,
          },
        }
      }

      if (s.type === 'TASK') {
        const prevStep = aray[index - ONE]
        const nextStep = aray[index + ONE]

        return {
          ...s,
          data: {
            ...s.data,
            isFirstInContext: prevStep.type === 'CONTEXT',
            // TODO
            isLastInContext: !nextStep || nextStep.type === 'CONTEXT',
          },
        }
      }

      return s
    }),

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

export default getScheduleSteps
