import { ScheduleIntroStep } from './scheduleIntroStep'
import { ScheduleOutroStep } from './scheduleOutroStep'
import { ScheduleTaskStep } from './scheduleTaskStep'

type ScheduleStep = ScheduleIntroStep | ScheduleTaskStep | ScheduleOutroStep

export type { ScheduleStep }
