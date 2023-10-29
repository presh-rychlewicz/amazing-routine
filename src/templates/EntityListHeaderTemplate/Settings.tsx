import { DrawerWrapper } from 'components'
import { UseModalReturn, useSettings } from 'hooks'
import { FC } from 'react'
import SettingsTemplate from '../SettingsTemplate'
import { SingleSettingCategoryEnum } from 'schemas'

type Props = UseModalReturn & {
  category: SingleSettingCategoryEnum
}

const Settings: FC<Props> = ({
  category,
  isModalVisible,
  setIsModalVisible,
}) => {
  const settings = useSettings([category])

  return (
    <DrawerWrapper
      open={isModalVisible}
      onClose={() => setIsModalVisible(false)}
    >
      <SettingsTemplate settings={settings} />
    </DrawerWrapper>
  )
}

export default Settings
