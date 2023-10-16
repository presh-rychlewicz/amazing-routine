enum SingleRoutineStatuses {
  'ACTIVE' = 'ACTIVE',
  'REMOVED' = 'REMOVED',
  'FUTURE' = 'FUTURE',
}

const singleRoutineStatuses = Object.values(SingleRoutineStatuses)

type SingleRoutine = {
  name: string
  id: string
  note: string | undefined
  status: SingleRoutineStatuses
  time: string | undefined
  startDate: string
  endDate: string | undefined
  days: [boolean, boolean, boolean, boolean, boolean, boolean, boolean]
  interval: number
}

type RoutinesState = {
  value: Array<SingleRoutine>
}

type UpdatePayload = {
  id: SingleRoutine['id']
  update: Partial<Omit<SingleRoutine, 'id'>>
}

export type { RoutinesState, SingleRoutine, UpdatePayload }
export { singleRoutineStatuses, SingleRoutineStatuses }
