import { MISSING_CONTEXT_VALUE } from 'config'
import dayjs from 'dayjs'
import { ScheduleStep } from 'schemas'
import { getDurationString, getPluralPart } from 'utils'

const getStepPrompt = (currentStep: ScheduleStep) => {
  switch (currentStep.type) {
    case 'INTRO': {
      const { taskCount, routineName, durationInSecondsTotal } =
        currentStep.data

      const routinePart = routineName.toLowerCase().includes('routine')
        ? routineName
        : `${routineName} routine`
      const taskPart = `${
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        taskCount === 1 ? 'is only' : 'are'
      } ${taskCount}task${getPluralPart(taskCount)}`
      const durationPart = getDurationString(durationInSecondsTotal, {
        shouldShowFullUnits: true,
      })
      const estimationPart = dayjs()
        .add(durationInSecondsTotal, 'seconds')
        .format('h:mm')

      return `Welcome in ${routinePart}. There ${taskPart}, which should take ${durationPart}. Estimated end at ${estimationPart}.`
    }

    case 'TASK': {
      const { contextName, durationInSeconds, name, isFirst } = currentStep.data

      const isMissingContext = !contextName
      // TODO: not sure if this works
      const isMissingDuration = !durationInSeconds

      const introPart = `${isFirst ? 'First' : 'Next'} task is: `
      const taskNamePart = name
      const contextPart = isMissingContext
        ? `(${MISSING_CONTEXT_VALUE})`
        : ` in ${contextName}`
      const durationPart = isMissingDuration
        ? 'Missing duration'
        : `You have ${getDurationString(durationInSeconds, {
            shouldShowFullUnits: true,
          })}`

      return [introPart, taskNamePart, contextPart, durationPart].join('')
    }

    case 'OUTRO':
      return 'Outro'
  }

  return 'aaa'
}

export default getStepPrompt
