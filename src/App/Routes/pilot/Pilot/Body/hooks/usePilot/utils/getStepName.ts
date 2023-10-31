import { ScheduleStep } from 'schemas'
import { getPluralPart } from 'utils'

const getStepName = (currentStep: ScheduleStep) => {
  switch (currentStep.type) {
    case 'INTRO':
      return getPluralPart(currentStep.data.taskCount, 'task')

    case 'TASK':
    case 'OUTRO':
      return currentStep.data.name

    case 'CONTEXT':
      return currentStep.data.name
  }
}

export default getStepName
