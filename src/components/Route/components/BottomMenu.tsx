import AnalyticsIcon from '@mui/icons-material/Analytics'
import DashboardIcon from '@mui/icons-material/Dashboard'
import LoopIcon from '@mui/icons-material/Loop'
import MapIcon from '@mui/icons-material/Map'
import SettingsIcon from '@mui/icons-material/Settings'
import TaskIcon from '@mui/icons-material/Task'
import { Stack } from '@mui/joy'
import IconButtonElement from 'components/CommonElement/IconButtonElement'
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
      paddingTop={0.5}
      borderTop="1px solid lightgray"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      {menuItems.map((menuItem, index) => (
        <IconButtonElement
          key={index}
          fullWidth
          // TODO: test and replace to final one
          // title="test-title"
          icon={menuItem.icon}
          onClick={() => (menuItem.view ? navigate(menuItem.view) : null)}
        />
      ))}
    </Stack>
  )
}

type MenuItem = {
  icon: ReactNode
  view: View
}

const menuItems: Array<MenuItem> = [
  {
    icon: <DashboardIcon />,
    view: paths.dashboard.core,
  },
  {
    icon: <LoopIcon />,
    view: paths.routines.core,
  },
  {
    icon: <TaskIcon />,
    view: paths.tasks.core,
  },
  {
    icon: <MapIcon />,
    view: paths.contexts.core,
  },
  {
    icon: <AnalyticsIcon />,
    view: paths.statistics.core,
  },
  {
    icon: <SettingsIcon />,
    view: paths.settings.core,
  },
]

export default BottomMenu
