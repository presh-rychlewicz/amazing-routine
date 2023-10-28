import { MISSING_CONTEXT_VALUE } from 'config'
import { ScheduleStep } from 'schemas'
import getIsStepTask from './getIsStepTask'
import getIsStepIntro from './getIsStepIntro'
import { getDurationString } from 'utils'

const getSubtitle = (currentStep: ScheduleStep) => {
  const isTask = getIsStepTask(currentStep)
  const isIntro = getIsStepIntro(currentStep)

  const subtitle = isTask
    ? currentStep.data.contextName ?? MISSING_CONTEXT_VALUE
    : isIntro
    ? `${getDurationString(currentStep.data.durationInSecondsTotal)}`
    : undefined

  return subtitle
}

export default getSubtitle
