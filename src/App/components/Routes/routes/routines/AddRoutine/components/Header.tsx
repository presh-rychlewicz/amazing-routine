import { HeaderGeneric } from 'components'
import { paths } from 'config'
import { useNavigate } from 'hooks'

const Header = () => {
  const navigate = useNavigate()

  return (
    <HeaderGeneric
      topLeft={{
        content: 'Add routine',
        level: 'h4',
        type: 'TEXT',
      }}
      topRight={{
        onClick: () => navigate(paths.routines.children.index.absolute),
        type: 'X_BUTTON',
      }}
    />
  )
}

export default Header
