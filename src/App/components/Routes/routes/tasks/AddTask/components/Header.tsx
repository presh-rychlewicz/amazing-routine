import { HeaderGeneric } from 'components'
import { paths } from 'config'
import { useNavigate } from 'hooks'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const returnPath =
    state && state.returnPath
      ? state.returnPath.slice(1)
      : paths.tasks.children.index.absolute

  return (
    <HeaderGeneric
      topLeft={{
        content: 'Add task',
        level: 'h4',
        type: 'TEXT',
      }}
      topRight={{
        onClick: () => navigate(returnPath),
        type: 'X_BUTTON',
      }}
    />
  )
}

export default Header
