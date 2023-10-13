export enum SingleRoutineStatuses {
  'ACTIVE' = 'ACTIVE',
  'REMOVED' = 'REMOVED',
  'FUTURE' = 'FUTURE',
}

export const singleRoutineStatuses = Object.values(SingleRoutineStatuses)

export type SingleRoutine = {
  name: string
  id: string
  note: string
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

export type { RoutinesState }
