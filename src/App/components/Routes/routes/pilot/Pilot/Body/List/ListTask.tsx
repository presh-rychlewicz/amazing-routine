import DoneIcon from '@mui/icons-material/Done'
import { SmallCard } from 'components'
import { FC } from 'react'
import { TaskDataElem } from 'schemas'
import { getDurationString } from 'utils'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import DangerousIcon from '@mui/icons-material/Dangerous'

type Props = Pick<
  TaskDataElem,
  'name' | 'isDone' | 'durationInSeconds' | 'isSkipped' | 'isFailed'
> & {
  isCurrent: boolean
}

const ListTask: FC<Props> = ({
  isSkipped,
  isFailed,
  isCurrent,
  durationInSeconds,
  name,
  isDone,
}) => (
  <SmallCard
    variant={isCurrent ? 'outlined' : undefined}
    title={name}
    subtitle={getDurationString(durationInSeconds, {
      shouldShowEmptyMessage: true,
    })}
    elements={[
      {
        disabled: true,
        icon: <DangerousIcon />,
        isVisible: isFailed,
        onClick: () => null,
        type: 'ICON_BUTTON',
      },
      {
        disabled: true,
        icon: <SkipNextIcon />,
        isVisible: isSkipped,
        onClick: () => null,
        type: 'ICON_BUTTON',
      },
      {
        disabled: true,
        icon: <DoneIcon />,
        isVisible: isDone,
        onClick: () => null,
        type: 'ICON_BUTTON',
      },
    ]}
  />
)

export default ListTask
