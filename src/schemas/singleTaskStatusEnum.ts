import z, { enum as zEnum } from 'zod'

const singleTaskStatusEnum = zEnum(['ACTIVE', 'REMOVED'])
type SingleTaskStatusEnum = z.infer<typeof singleTaskStatusEnum>

export { singleTaskStatusEnum }
export type { SingleTaskStatusEnum }
