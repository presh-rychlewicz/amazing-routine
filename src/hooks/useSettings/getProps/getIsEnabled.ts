import { SingleSetting } from 'schemas'

const getSomeProps = (
  setting: SingleSetting,
  isAvailableOnDevice: boolean,
  toggle: (id: SingleSetting['id']) => void
) => {
  const userSettingValue = setting.value

  return {
    isDisabled: !isAvailableOnDevice,
    isEnabled: isAvailableOnDevice && userSettingValue,
    key: setting.id,
    toggle: () => toggle(setting.id),
  }
}

export default getSomeProps
