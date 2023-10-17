import { FC } from 'react'
import { HeaderGeneric } from '../../../../components'
import { SingleRoutine } from '../../../../store/reducers/routines/types'
import { useNavigate } from '../../../../hooks'
import { routes } from '../../../../types'

type Props = {
  routineId: SingleRoutine['id']
}

const Header: FC<Props> = ({ routineId }) => {
  const navigate = useNavigate()

  return (
    <HeaderGeneric
      topRight={{
        type: 'X_BUTTON',
        // TODO
        onClick: () =>
          navigate(routes.routines.children.details.absolute(routineId)),
        size: 'lg',
      }}
    />
  )
}

export default Header
