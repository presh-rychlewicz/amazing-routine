import z, { enum as zEnum } from 'zod'

const singleContextStatusEnum = zEnum(['ACTIVE', 'REMOVED'])
type SingleContextStatusEnum = z.infer<typeof singleContextStatusEnum>

export { singleContextStatusEnum }
export type { SingleContextStatusEnum }
