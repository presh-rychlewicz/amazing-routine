import LoopIcon from '@mui/icons-material/Loop'
import TaskIcon from '@mui/icons-material/Task'
import { IconButton, Stack } from '@mui/joy'
import { ReactNode } from 'react'
import { useNavigate } from '../../../hooks'
import { View, routes } from '../../../types'

const BottomMenu = () => {
  const navigate = useNavigate()

  return (
    <Stack
      bottom={0}
      left={0}
      right={0}
      paddingTop={1}
      borderTop="1px solid lightgray"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      {menuItems.map((menuItem, index) => (
        <IconButton
          key={index}
          size="lg"
          sx={{ width: '100%' }}
          {...(menuItem.view && { onClick: () => navigate(menuItem.view) })}
          disabled={menuItem.disabled}
          // TODO
          title="test-title"
        >
          {menuItem.icon}
        </IconButton>
      ))}
    </Stack>
  )
}

type MenuItem = {
  icon: ReactNode
} & (
  | {
      disabled: true
      view?: undefined
    }
  | {
      disabled: false
      view: View
    }
)

const menuItems: Array<MenuItem> = [
  {
    disabled: true,
    icon: <LoopIcon />,
  },
  {
    disabled: false,
    view: routes.routines.core,
    icon: <LoopIcon />,
  },
  {
    disabled: false,
    view: routes.tasks.core,
    icon: <TaskIcon />,
  },
  {
    disabled: true,
    icon: <LoopIcon />,
  },
  {
    disabled: true,
    icon: <LoopIcon />,
  },
]

export default BottomMenu
