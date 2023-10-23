import z, { enum as zEnum } from 'zod'

const singleRoutineStatusEnum = zEnum(['ACTIVE', 'REMOVED', 'FUTURE'])
type SingleRoutineStatusEnum = z.infer<typeof singleRoutineStatusEnum>

export { singleRoutineStatusEnum }
export type { SingleRoutineStatusEnum }
