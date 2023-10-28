import { ScheduleIntroStep, ScheduleOutroStep, ScheduleTaskStep } from 'schemas'

const getIsStepTask = (
  step: ScheduleIntroStep | ScheduleTaskStep | ScheduleOutroStep
): step is ScheduleTaskStep => step.type === 'TASK'

export default getIsStepTask
