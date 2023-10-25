import { SettingsState } from 'schemas'

const initialState: SettingsState = {
  value: [
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
    {
      category: 'ROUTINE_LIST',
      id: 'SHOW_ROUTINE_DEV_DETAILS',
      name: 'Show routine dev details',
      value: false,
    },
  ],
  version: 3,
}

export default initialState
