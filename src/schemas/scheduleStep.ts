import { Id } from './id'
import { SingleRoutine } from './singleRoutine'
import { TaskDataElem } from './taskDataElem'

type ScheduleStep =
  | {
      type: 'INTRO'
      data: {
        id: Id
        durationInSeconds: number
        name: string
        routineName: SingleRoutine['name']
        isDone: boolean
        taskCount: number
        durationInSecondsTotal: number
      }
    }
  | {
      type: 'TASK'
      data: TaskDataElem
    }
  | {
      data: {
        id: Id
        isDone: boolean
        durationInSeconds: number
        name: string
      }
      type: 'OUTRO'
    }

export type { ScheduleStep }
