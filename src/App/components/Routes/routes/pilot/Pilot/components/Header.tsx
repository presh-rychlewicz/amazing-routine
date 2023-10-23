import { FC } from 'react'
import { HeaderGeneric } from 'components'
import { SingleRoutine } from 'schemas'
import { useNavigate } from 'hooks'
import { paths } from 'config'
import SettingsIcon from '@mui/icons-material/Settings'

type Props = {
  routineId: SingleRoutine['id']
}

const Header: FC<Props> = ({ routineId }) => {
  const navigate = useNavigate()

  return (
    <HeaderGeneric
      topLeft={{
        disabled: true,
        icon: <SettingsIcon />,
        onClick: () => null,
        type: 'ICON_BUTTON',
        variant: 'soft',
      }}
      topRight={{
        onClick: () =>
          navigate(paths.routines.children.details.absolute(routineId)),
        size: 'lg',
        type: 'X_BUTTON',
      }}
    />
  )
}

export default Header
