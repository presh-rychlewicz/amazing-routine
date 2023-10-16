import { Button, Stack } from '@mui/joy'
import { useNavigate } from '../../../../hooks'
import { routes } from '../../../../types'

const Header = () => {
  const navigate = useNavigate()

  return (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      marginBottom={1.5}
    >
      <Button
        variant="soft"
        size="sm"
        onClick={() => navigate(routes.tasks.children.add.absolute)}
      >
        New
      </Button>
    </Stack>
  )
}

export default Header
