import { TypeOf, object, string } from 'zod'
import { idSchema } from './id'
import { singleContextStatusEnum } from './singleContextStatusEnum'

const singleContextSchema = object({
  id: idSchema,
  name: string(),
  status: singleContextStatusEnum,
})
type SingleContext = TypeOf<typeof singleContextSchema>

export { singleContextSchema }
export type { SingleContext }
