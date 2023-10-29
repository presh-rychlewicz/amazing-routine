import {
  ScheduleContextStep,
  ScheduleIntroStep,
  ScheduleOutroStep,
  ScheduleTaskStep,
} from 'schemas'

const getIsStepTask = (
  step:
    | ScheduleIntroStep
    | ScheduleTaskStep
    | ScheduleOutroStep
    | ScheduleContextStep
): step is ScheduleTaskStep => step.type === 'TASK'

export default getIsStepTask
