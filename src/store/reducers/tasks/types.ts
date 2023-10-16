const routineMetaStatuses = ['IN_PROGRESS', 'NEW'] as const

type RoutineMetaStatus = (typeof routineMetaStatuses)[number]

type RoutineMeta = {
  status: RoutineMetaStatus
}

type SingleTask = {
  id: string
  name: string
  note: string | undefined
} & (
  | {
      routineId: string
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
