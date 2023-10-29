import { ScheduleStep } from 'schemas'

const getCurrentStep = (stepDataToDo: Array<ScheduleStep>) => {
  const [currentStep] = stepDataToDo

  return currentStep
}

export default getCurrentStep
