import SettingsIcon from '@mui/icons-material/Settings'
import { DialogModalGeneric, HeaderGeneric } from 'components'
import { paths } from 'config'
import { useModal, useNavigate } from 'hooks'
import { FC } from 'react'
import { Id } from 'schemas'
import SettingsDrawerTemplate from 'templates/SettingsDrawerTemplate'

type Props = {
  routineId: Id
}

const Header: FC<Props> = ({ routineId }) => {
  const navigate = useNavigate()
  const closeModalProps = useModal()
  const settingsDrawerProps = useModal()

  return (
    <>
      <HeaderGeneric
        topLeft={{
          icon: <SettingsIcon />,
          onClick: settingsDrawerProps.show,
          type: 'ICON_BUTTON',
        }}
        topRight={{
          onClick: closeModalProps.show,
          type: 'X_BUTTON',
        }}
      />

      <DialogModalGeneric
        onConfirm={() =>
          navigate(paths.routines.children.details.absolute(routineId))
        }
        {...closeModalProps}
      />

      <SettingsDrawerTemplate
        {...settingsDrawerProps}
        title="Settings"
        categories={['PILOT']}
      />
    </>
  )
}

export default Header
