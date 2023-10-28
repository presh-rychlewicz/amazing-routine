import { SingleSetting, SingleSettingCategoryEnum } from 'schemas'
import getSomeProps from './getIsEnabled'

const getProps = (
  setting: SingleSetting,
  toggle: (id: SingleSetting['id']) => void
): GetSettingPropsReturn => {
  switch (setting.id) {
    case 'KEEP_SCREEN_ON': {
      // @ts-ignore
      const { wakeLock } = navigator
      const isAvailableOnDevice = !!wakeLock

      return {
        ...getSomeProps(setting, isAvailableOnDevice, toggle),
        category: 'PILOT',
        label: 'Keep screen on',
      }
    }

    case 'ENABLE_TTS': {
      // TEMP
      const isAvailableOnDevice = true

      return {
        ...getSomeProps(setting, isAvailableOnDevice, toggle),
        category: 'PILOT',
        label: 'Enable voice hints',
      }
    }

    case 'SHOW_ROUTINE_DEV_DETAILS': {
      const isAvailableOnDevice = true

      return {
        ...getSomeProps(setting, isAvailableOnDevice, toggle),
        category: 'ROUTINE_LIST',
        label: 'Show routine dev details',
      }
    }

    case 'DARK_MODE': {
      const isAvailableOnDevice = true

      return {
        ...getSomeProps(setting, isAvailableOnDevice, toggle),
        category: 'GENERAL',
        label: '[Not working] Enable Dark Mode theme',
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
  category: SingleSettingCategoryEnum
  toggle: () => void
}

export default getProps
export type { GetSettingPropsReturn }
