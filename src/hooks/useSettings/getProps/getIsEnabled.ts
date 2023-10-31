import { Id, SingleSetting } from 'schemas'

const getSomeProps = (
  setting: SingleSetting,
  isAvailableOnDevice: boolean,
  toggle: (id: Id) => void
) => {
  const userSettingValue = setting.value

  return {
    errorMessage: isAvailableOnDevice ? undefined : 'Not supported by device',
    isDisabled: !isAvailableOnDevice,
    isEnabled: isAvailableOnDevice && userSettingValue,
    key: setting.id,
    toggle: () => toggle(setting.id),
  }
}

export default getSomeProps
