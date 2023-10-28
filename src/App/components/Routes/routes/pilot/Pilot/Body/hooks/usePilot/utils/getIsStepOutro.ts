import { ScheduleIntroStep, ScheduleOutroStep, ScheduleTaskStep } from 'schemas'

const getIsStepOutro = (
  step: ScheduleIntroStep | ScheduleTaskStep | ScheduleOutroStep
): step is ScheduleOutroStep => step.type === 'OUTRO'

export default getIsStepOutro
