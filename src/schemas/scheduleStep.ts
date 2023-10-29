import { ScheduleContextStep } from './scheduleContextStep'
import { ScheduleIntroStep } from './scheduleIntroStep'
import { ScheduleOutroStep } from './scheduleOutroStep'
import { ScheduleTaskStep } from './scheduleTaskStep'

type ScheduleStep =
  | ScheduleIntroStep
  | ScheduleContextStep
  | ScheduleTaskStep
  | ScheduleOutroStep

export type { ScheduleStep }
