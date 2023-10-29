import { HeaderGeneric } from 'components'
import { FC } from 'react'

type Props = {
  onExit: () => void
}

const Header: FC<Props> = ({ onExit }) => (
  <HeaderGeneric
    topLeft={{
      content: 'Well done',
      level: 'h3',
      type: 'TEXT',
    }}
    topRight={{
      onClick: onExit,
      type: 'X_BUTTON',
    }}
  />
)

export default Header
