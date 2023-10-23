import DoneIcon from '@mui/icons-material/Done'
import { SmallCard } from 'components'
import { FC } from 'react'
import { TaskDataElem } from 'schemas'
import { getDurationString } from 'utils'

type Props = Pick<TaskDataElem, 'name' | 'isDone' | 'durationInSeconds'>

const ListTask: FC<Props> = ({ durationInSeconds, name, isDone }) => (
  <SmallCard
    title={name}
    subtitle={getDurationString(durationInSeconds, {
      shouldShowEmptyMessage: true,
    })}
    elements={[
      {
        icon: <DoneIcon />,
        isVisible: isDone,
        onClick: () => null,
        type: 'ICON_BUTTON',
      },
    ]}
  />
)

export default ListTask
