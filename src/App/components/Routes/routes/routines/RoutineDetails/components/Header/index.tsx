import { HeaderGeneric } from 'components'
import { FC } from 'react'
import { SingleRoutine, StatusDataElem } from 'schemas'
import Options from './Options'
import SettingsIcon from '@mui/icons-material/Settings'
import { presentScore } from 'utils'
import { paths } from 'config'
import { useNavigate } from 'hooks'

type Props = Pick<SingleRoutine, 'name' | 'score'> & {
  statusData: Array<StatusDataElem>
}

const Header: FC<Props> = ({ statusData, name, score }) => {
  const navigate = useNavigate()
  const inProgressTasks =
    statusData.find((s) => s.status === 'IN_PROGRESS')?.tasks ?? []
  const hasAnyTasksInProgress = Boolean(inProgressTasks.length)
  const subLeftContent = `Score: ${presentScore(score)}`

  return (
    <HeaderGeneric
      topLeft={{
        content: name,
        level: 'h4',
        type: 'TEXT',
      }}
      topRight={[
        {
          content: <Options hasAnyTasksInProgress={hasAnyTasksInProgress} />,
          type: 'COMPONENT',
        },
        {
          disabled: true,
          icon: <SettingsIcon />,
          onClick: () => null,
          type: 'ICON_BUTTON',
        },
        {
          onClick: () => navigate(paths.routines.children.index.absolute),
          type: 'X_BUTTON',
        },
      ]}
      bottomLeft={
        hasAnyTasksInProgress
          ? {
              content: subLeftContent,
              level: 'body-xs',
              type: 'TEXT',
            }
          : undefined
      }
    />
  )
}

export default Header
