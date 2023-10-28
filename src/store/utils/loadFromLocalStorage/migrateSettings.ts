import { SettingsState, settingsStateSchema } from 'schemas'
import initialState from 'store/reducer/settings/initialState'

const migrateSettings = (rawSettings: any): SettingsState => {
  const existingIds = rawSettings.value.map((s: any) => s.id)
  const newIds = initialState.value.filter((s) => !existingIds.includes(s.id))
  const newSettings: SettingsState = {
    ...rawSettings,
    value: [...rawSettings.value, ...newIds],
    version: initialState.version,
  }

  const parsingStatus = settingsStateSchema.safeParse(newSettings)
  if (parsingStatus.success) {
    return parsingStatus.data
  } else {
    return migrateSettings(newSettings)
  }
}

export default migrateSettings
