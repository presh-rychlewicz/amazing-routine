import { RootState } from 'schemas'

const selectSettings = (state: RootState) => state.settings.value

export default selectSettings
