import { TypeOf, boolean, object } from 'zod'
import { idSchema } from './id'

const singleSettingSchema = object({
  // TODO: could be enum
  id: idSchema,
  value: boolean(),
})
type SingleSetting = TypeOf<typeof singleSettingSchema>

export { singleSettingSchema }
export type { SingleSetting }
