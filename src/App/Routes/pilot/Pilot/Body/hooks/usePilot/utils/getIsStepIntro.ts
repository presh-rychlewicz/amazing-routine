import {
  ScheduleContextStep,
  ScheduleIntroStep,
  ScheduleOutroStep,
  ScheduleTaskStep,
} from 'schemas'

const getIsStepIntro = (
  step:
    | ScheduleIntroStep
    | ScheduleTaskStep
    | ScheduleOutroStep
    | ScheduleContextStep
): step is ScheduleIntroStep => step.type === 'INTRO'

export default getIsStepIntro
