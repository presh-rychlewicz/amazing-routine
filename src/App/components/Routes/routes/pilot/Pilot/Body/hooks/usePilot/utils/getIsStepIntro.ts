import { ScheduleIntroStep, ScheduleOutroStep, ScheduleTaskStep } from 'schemas'

// function isFish(pet: Fish | Bird): pet is Fish {
// return (pet as Fish).swim !== undefined;
//   }

const getIsStepIntro = (
  step: ScheduleIntroStep | ScheduleTaskStep | ScheduleOutroStep
): step is ScheduleIntroStep => step.type === 'INTRO'

export default getIsStepIntro
