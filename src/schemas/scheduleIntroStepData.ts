import { Id } from './id'
import { SingleRoutine } from './singleRoutine'

type ScheduleIntroStepData = {
  id: Id
  durationInSeconds: number
  name: string
  routineName: SingleRoutine['name']
  isDone: boolean
  taskCount: number
  durationInSecondsTotal: number
}

export type { ScheduleIntroStepData }
