import { MISSING_CONTEXT_VALUE } from 'config'
import { ScheduleStep } from 'schemas'
import { getDurationString } from 'utils'

const getSubtitle = (currentStep: ScheduleStep) => {
  switch (currentStep.type) {
    case 'TASK':
      return currentStep.data.contextName ?? MISSING_CONTEXT_VALUE

    case 'INTRO':
      return `Estimation: ${getDurationString(
        currentStep.data.durationInSecondsTotal
      )}`

    case 'CONTEXT':
      return 'Switch context to'

    case 'OUTRO':
      return undefined
  }
}

export default getSubtitle
