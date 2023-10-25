import { SingleSettingCategoryEnum } from 'schemas'
import useStoreState from '../useStoreState'
import getProps from './getProps'

const useSettings = (categories?: Array<SingleSettingCategoryEnum>) => {
  const { settings, getSettingsByCategory } = useStoreState()

  if (categories && categories.length) {
    return getSettingsByCategory(categories).map(getProps)
  }

  return settings.map(getProps)
}

export default useSettings
