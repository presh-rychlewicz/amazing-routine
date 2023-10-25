import { SettingsState, settingsStateSchema } from 'schemas'

const migrateSettings = (rawSettings: any): SettingsState => {
  let newSettings: SettingsState = rawSettings

  switch (rawSettings.version) {
    case 1:
      newSettings = {
        ...rawSettings,
        value: [
          ...rawSettings.value,
          {
            category: 'PILOT',
            id: 'KEEP_SCREEN_ON',
            name: 'Keep screen on',
            value: false,
          },
          {
            category: 'PILOT',
            id: 'ENABLE_TTS',
            name: 'Enable voice hints',
            value: false,
          },
        ],
        // TODO
        // @ts-ignore
        version: 2,
      }
      break

    case 2:
      newSettings = {
        ...rawSettings,
        value: [
          ...rawSettings.value,
          {
            category: 'ROUTINE_LIST',
            id: 'SHOW_ROUTINE_DEV_DETAILS',
            name: 'Show routine dev details',
            value: true,
          },
        ],
        version: 3,
      }
      break
  }

  const parsingStatus = settingsStateSchema.safeParse(newSettings)
  if (parsingStatus.success) {
    return parsingStatus.data
  } else {
    return migrateSettings(newSettings)
  }
}

export default migrateSettings
