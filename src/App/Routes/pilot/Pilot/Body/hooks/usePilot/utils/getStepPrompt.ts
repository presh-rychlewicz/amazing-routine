import dayjs from 'dayjs'
import { ScheduleStep } from 'schemas'
import { getDurationString, getPluralPart } from 'utils'

const getStepPrompt = (currentStep: ScheduleStep) => {
  switch (currentStep.type) {
    case 'INTRO': {
      const { taskCount, routineName, durationInSecondsTotal } =
        currentStep.data

      // INTRO PART
      const spokenRoutineName = routineName.toLowerCase().includes('routine')
        ? routineName
        : `${routineName} routine`
      const introPart = `Welcome in ${spokenRoutineName}.`
      //

      // COUNT PART
      const taskPart = `${
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        taskCount === 1 ? 'is only' : 'are'
      } ${getPluralPart(taskCount, 'task')}`
      const countPart = `There ${taskPart},`
      //

      // DURATION PART
      const duration = getDurationString(durationInSecondsTotal, {
        shouldShowFullUnits: true,
      })
      const durationPart = `which should take ${duration}.`
      //

      // ESTIMATION PART
      const estimationTime = dayjs()
        .add(durationInSecondsTotal, 'seconds')
        .format('h:mm')
      const estimationPart = `Estimated end at ${estimationTime}.`
      //

      return [introPart, countPart, durationPart, estimationPart].join(' ')
    }

    case 'TASK': {
      const { durationInSeconds, name, isFirstInContext, isLastInContext } =
        currentStep.data

      // INTRO PART
      const introPartPrefix =
        isFirstInContext && isLastInContext
          ? 'Only'
          : isFirstInContext
          ? 'First'
          : isLastInContext
          ? 'Last'
          : 'Next'
      const introPart = `${introPartPrefix} task is: ${name}.`
      //

      // DURATION PART
      // TODO: not sure if this works
      const isMissingDuration = !durationInSeconds
      const durationPart = isMissingDuration
        ? 'Missing duration'
        : `You have ${getDurationString(durationInSeconds, {
            shouldShowFullUnits: true,
          })}`
      //

      return [introPart, durationPart].join(' ')
    }

    case 'OUTRO':
      return "That's it for now"

    case 'CONTEXT': {
      const { name, durationInSeconds, isFirst, isLast } = currentStep.data

      // INTRO PART
      const introPartPrefix =
        isFirst && isLast
          ? 'Only'
          : isFirst
          ? 'First'
          : isLast
          ? 'Last'
          : 'Next'
      const introPart = `${introPartPrefix} context is ${name}.`
      //

      // DURATION PART
      const durationPart = `You have ${getDurationString(durationInSeconds, {
        shouldShowFullUnits: true,
      })}.`
      //

      return [introPart, durationPart].join(' ')
    }
  }
}

export default getStepPrompt
