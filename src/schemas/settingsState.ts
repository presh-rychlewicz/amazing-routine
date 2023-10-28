import { TypeOf, array, literal, object } from 'zod'
import { singleSettingSchema } from './singleSetting'
import { SETTINGS_SCHEMA_CURRENT_VERSION } from 'config'

const settingsStateSchema = object({
  value: array(singleSettingSchema),
  version: literal(SETTINGS_SCHEMA_CURRENT_VERSION),
})
type SettingsState = TypeOf<typeof settingsStateSchema>

export { settingsStateSchema }
export type { SettingsState }
