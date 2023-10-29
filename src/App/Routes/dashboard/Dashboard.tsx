import { EmptyState, HeaderGeneric, Route } from 'components'
import SettingsIcon from '@mui/icons-material/Settings'

const Dashboard = () => (
  <Route>
    <HeaderGeneric
      topRight={{
        disabled: true,
        icon: <SettingsIcon />,
        onClick: () => null,
        type: 'ICON_BUTTON',
      }}
    />

    <EmptyState message="This screen is not ready yet :(" />
  </Route>
)

export default Dashboard
