import SettingsIcon from '@mui/icons-material/Settings'
import { HeaderGeneric } from 'components'
import { paths } from 'config'
import { useModal, useNavigate } from 'hooks'
import { FC } from 'react'
import { SingleRoutine } from 'schemas'
import SettingsDrawerTemplate from 'templates/SettingsDrawerTemplate'
import { presentScore } from 'utils'

type Props = Pick<SingleRoutine, 'name' | 'score'> & {
  hasAnyTasksInProgress: boolean
}

const Header: FC<Props> = ({ name, score, hasAnyTasksInProgress }) => {
  const navigate = useNavigate()
  const subLeftContent = `Score: ${presentScore(score)}`

  const settingsModalProps = useModal()

  return (
    <>
      <HeaderGeneric
        topLeft={{
          content: name,
          level: 'h4',
          type: 'TEXT',
        }}
        topRight={[
          {
            icon: <SettingsIcon />,
            onClick: settingsModalProps.toggle,
            type: 'ICON_BUTTON',
          },
          {
            onClick: () => navigate(paths.routines.core),
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

      <SettingsDrawerTemplate
        {...settingsModalProps}
        categories={['ROUTINE_DETAILS']}
      />
    </>
  )
}

export default Header
