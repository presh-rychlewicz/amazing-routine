import { ScheduleStep } from 'schemas'
import getIsStepIntro from './getIsStepIntro'
import getIsStepTask from './getIsStepTask'

const getStepName = (currentStep: ScheduleStep) => {
  const isTask = getIsStepTask(currentStep)
  const isIntro = getIsStepIntro(currentStep)

  const stepName = isTask
    ? currentStep?.data.name
    : isIntro
    ? `${currentStep.data.taskCount} tasks`
    : currentStep.data.name

  return stepName
}

export default getStepName
