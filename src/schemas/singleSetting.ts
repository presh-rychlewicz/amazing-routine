import { TypeOf, boolean, object, string } from 'zod'
import { idSchema } from './id'
import { singleSettingCategoryEnum } from './singleSettingCategoryEnum'

const singleSettingSchema = object({
  category: singleSettingCategoryEnum,
  // TODO: could be enum
  id: idSchema,
  name: string(),
  value: boolean(),
})
type SingleSetting = TypeOf<typeof singleSettingSchema>

export { singleSettingSchema }
export type { SingleSetting }
