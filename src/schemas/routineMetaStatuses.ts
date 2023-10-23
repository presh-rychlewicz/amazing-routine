import { TypeOf, enum as zEnum } from 'zod'

const routineMetaStatusSchema = zEnum(['IN_PROGRESS', 'NEW'])
type RoutineMetaStatus = TypeOf<typeof routineMetaStatusSchema>

export { routineMetaStatusSchema }
export type { RoutineMetaStatus }
