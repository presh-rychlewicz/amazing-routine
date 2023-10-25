import { DrawerWrapper } from 'components'
import { useSettings } from 'hooks'
import { UseModalReturn } from 'hooks/useModal'
import { FC } from 'react'
import { SettingsTemplate } from 'templates'

type Props = UseModalReturn

const Settings: FC<Props> = ({ isModalVisible, setIsModalVisible }) => {
  const settings = useSettings(['PILOT'])

  return (
    <DrawerWrapper
      title="Settings"
      open={isModalVisible}
      onClose={() => setIsModalVisible(false)}
    >
      <SettingsTemplate settings={settings} />
    </DrawerWrapper>
  )
}

export default Settings
