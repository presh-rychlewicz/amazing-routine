import { SETTINGS_SCHEMA_CURRENT_VERSION } from 'config'
import { SettingsState } from 'schemas'

const initialState: SettingsState = {
  value: [
    {
      id: 'KEEP_SCREEN_ON',
      value: false,
    },
    {
      id: 'ENABLE_TTS',
      value: false,
    },
    {
      id: 'SHOW_ROUTINE_DEV_DETAILS',
      value: false,
    },
    {
      id: 'DARK_MODE',
      value: false,
    },
  ],
  version: SETTINGS_SCHEMA_CURRENT_VERSION,
}

export default initialState
