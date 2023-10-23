import { TypeOf, string } from 'zod'

const idSchema = string()

type Id = TypeOf<typeof idSchema>

export { idSchema }
export type { Id }
