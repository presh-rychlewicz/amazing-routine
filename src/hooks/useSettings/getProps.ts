import { SingleSetting } from 'schemas'

const getIsEnabled = (
  userSettingValue: SingleSetting['value'],
  isAvailableOnDevice: boolean
) => isAvailableOnDevice && userSettingValue

const getProps = (setting: SingleSetting): GetSettingPropsReturn => {
  const commonProps = {
    category: setting.category,
    key: setting.id,
    label: setting.name,
  }

  switch (setting.id) {
    case 'KEEP_SCREEN_ON': {
      // @ts-ignore
      const wakeLock = navigator.wakeLock
      const isAvailableOnDevice = !!wakeLock

      return {
        ...commonProps,
        errorMessage: isAvailableOnDevice
          ? undefined
          : 'Not supported by device',
        isDisabled: !isAvailableOnDevice,
        isEnabled: getIsEnabled(setting.value, isAvailableOnDevice),
      }
    }

    case 'ENABLE_TTS': {
      // TEMP
      const isAvailableOnDevice = false

      return {
        ...commonProps,
        errorMessage: undefined,
        // TEMP
        isDisabled: true,
        isEnabled: getIsEnabled(setting.value, isAvailableOnDevice),
      }
    }

    case 'SHOW_ROUTINE_DEV_DETAILS': {
      const isAvailableOnDevice = true

      return {
        ...commonProps,
        errorMessage: undefined,
        isDisabled: false,
        isEnabled: getIsEnabled(setting.value, isAvailableOnDevice),
      }
    }

    default:
      throw new Error('Unhandled setting key')
  }
}

type GetSettingPropsReturn = {
  errorMessage: string | undefined
  isDisabled: boolean
  isEnabled: boolean
  label: string
  key: string
  category: SingleSetting['category']
}

export default getProps
export type { GetSettingPropsReturn }
