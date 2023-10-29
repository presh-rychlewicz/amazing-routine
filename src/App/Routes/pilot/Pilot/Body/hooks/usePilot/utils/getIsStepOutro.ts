import {
  ScheduleContextStep,
  ScheduleIntroStep,
  ScheduleOutroStep,
  ScheduleTaskStep,
} from 'schemas'

const getIsStepOutro = (
  step:
    | ScheduleIntroStep
    | ScheduleTaskStep
    | ScheduleOutroStep
    | ScheduleContextStep
): step is ScheduleOutroStep => step.type === 'OUTRO'

export default getIsStepOutro
