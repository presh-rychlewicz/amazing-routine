export const SINGLE_ROUTINE_STATUSES = ['ACTIVE', 'REMOVED'] as const

type DateObject = {
  day: number
  month: number
  year: number
}

export type SingleRoutine = {
  name: string
  id: string
  note: string
  status: (typeof SINGLE_ROUTINE_STATUSES)[number]
  startDate: DateObject
  // endDate:DateObject|undefined
}

type RoutinesState = {
  value: Array<SingleRoutine>
}

export type { RoutinesState }
