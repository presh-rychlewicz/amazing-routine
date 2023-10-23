import AnalyticsIcon from '@mui/icons-material/Analytics'
import DashboardIcon from '@mui/icons-material/Dashboard'
import LoopIcon from '@mui/icons-material/Loop'
import MapIcon from '@mui/icons-material/Map'
import SettingsIcon from '@mui/icons-material/Settings'
import TaskIcon from '@mui/icons-material/Task'
import { IconButton, Stack } from '@mui/joy'
import { paths } from 'config'
import { useNavigate } from 'hooks'
import { ReactNode } from 'react'
import { View } from 'schemas'

const BottomMenu = () => {
  const navigate = useNavigate()

  return (
    <Stack
      component="footer"
      bottom={0}
      left={0}
      right={0}
      borderTop="1px solid lightgray"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      {menuItems.map((menuItem, index) => (
        <IconButton
          key={index}
          disabled={menuItem.disabled}
          size="lg"
          sx={{ width: '100%' }}
          // TODO: test and replace to final one
          title="test-title"
          {...(menuItem.view && { onClick: () => navigate(menuItem.view) })}
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
    icon: <DashboardIcon />,
  },
  {
    disabled: false,
    icon: <LoopIcon />,
    view: paths.routines.core,
  },
  {
    disabled: false,
    icon: <TaskIcon />,
    view: paths.tasks.core,
  },
  {
    disabled: false,
    icon: <MapIcon />,
    view: paths.contexts.core,
  },
  {
    disabled: true,
    icon: <AnalyticsIcon />,
  },
  {
    disabled: true,
    icon: <SettingsIcon />,
  },
]

export default BottomMenu
