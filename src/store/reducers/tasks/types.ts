import { Id } from '../../../types'
import { SingleRoutine } from '../routines/types'

const routineMetaStatuses = ['IN_PROGRESS', 'NEW'] as const

type RoutineMetaStatus = (typeof routineMetaStatuses)[number]

type RoutineMeta = {
  status: RoutineMetaStatus
}

// TODO: add context
type SingleTask = {
  id: Id
  name: string
  note: string | undefined
  duration: number | undefined
  order: number
} & (
  | {
      routineId: SingleRoutine['id']
      routineMeta: RoutineMeta
    }
  | {
      routineId: undefined
      routineMeta: undefined
    }
)

type TasksState = {
  value: Array<SingleTask>
}

type UpdatePayload = {
  id: SingleTask['id']
  update: Partial<Omit<SingleTask, 'id'>>
}

export { routineMetaStatuses }
export type { RoutineMetaStatus, SingleTask, TasksState, UpdatePayload }
