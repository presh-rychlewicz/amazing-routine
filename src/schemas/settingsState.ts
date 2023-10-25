import { TypeOf, array, literal, object } from 'zod'
import { singleSettingSchema } from './singleSetting'

const settingsStateSchema = object({
  value: array(singleSettingSchema),
  version: literal(3),
})
type SettingsState = TypeOf<typeof settingsStateSchema>

export { settingsStateSchema }
export type { SettingsState }
