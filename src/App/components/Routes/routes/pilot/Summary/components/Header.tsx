import { HeaderGeneric } from 'components'

const Header = () => (
  <HeaderGeneric
    topLeft={{
      content: 'Well done',
      level: 'h3',
      type: 'TEXT',
    }}
    topRight={{
      // TODO
      onClick: () => null,
      type: 'X_BUTTON',
    }}
  />
)

export default Header
