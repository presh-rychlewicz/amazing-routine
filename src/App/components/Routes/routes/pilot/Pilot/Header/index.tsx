import SettingsIcon from '@mui/icons-material/Settings'
import { DialogModalGeneric, HeaderGeneric } from 'components'
import { paths } from 'config'
import { useModal, useNavigate } from 'hooks'
import { FC } from 'react'
import { SingleRoutine } from 'schemas'
import Settings from './Settings'

type Props = {
  routineId: SingleRoutine['id']
}

const Header: FC<Props> = ({ routineId }) => {
  const navigate = useNavigate()
  const {
    isModalVisible: isCloseModalVisible,
    setIsModalVisible: setIsCloseModalVisible,
  } = useModal()
  const {
    isModalVisible: isSettingsDrawerVisible,
    setIsModalVisible: setIsSettingsDrawerVisible,
  } = useModal()

  return (
    <>
      <HeaderGeneric
        topLeft={{
          icon: <SettingsIcon />,
          onClick: () => setIsSettingsDrawerVisible(true),
          type: 'ICON_BUTTON',
        }}
        topRight={{
          onClick: () => setIsCloseModalVisible(true),
          type: 'X_BUTTON',
        }}
      />

      <DialogModalGeneric
        onConfirm={() =>
          navigate(paths.routines.children.details.absolute(routineId))
        }
        isModalVisible={isCloseModalVisible}
        setIsModalVisible={setIsCloseModalVisible}
      />

      <Settings
        isModalVisible={isSettingsDrawerVisible}
        setIsModalVisible={setIsSettingsDrawerVisible}
      />
    </>
  )
}

export default Header
