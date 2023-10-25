import { Id, SettingsState, SingleSetting } from 'schemas'
import { updateReducerTemplate } from 'store/reducer/_generics'

const update = updateReducerTemplate<
  SingleSetting,
  SettingsState,
  SettingUpdatePayload
>

type SettingUpdatePayload = {
  id: Id
  update: Partial<Omit<SingleSetting, 'id'>>
}

export default update
