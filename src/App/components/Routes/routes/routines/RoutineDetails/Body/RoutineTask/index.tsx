import AddIcon from '@mui/icons-material/Add'
import MoreTimeIcon from '@mui/icons-material/MoreTime'
import { SmallCard } from 'components'
import { useStoreDispatch } from 'hooks'
import { FC, useState } from 'react'
import { SingleTask } from 'schemas'
import { getDurationString } from 'utils'
import AddTimeModal from './AddTimeModal'

type Props = {
  routineTask: SingleTask
}

const RoutineTask: FC<Props> = ({ routineTask }) => {
  const storeDispatch = useStoreDispatch()
  const [isAddTimeModalVisible, setIsAddTimeModalVisible] = useState(false)

  const inStatusNew = routineTask.routineMeta?.status === 'NEW'
  const hasDuration = !!routineTask.durationInSeconds
  const durationInMins = getDurationString(routineTask.durationInSeconds, {
    shouldShowEmptyMessage: true,
  })

  return (
    <>
      <SmallCard
        elements={[
          {
            icon: <MoreTimeIcon />,
            isVisible: !hasDuration,
            onClick: () => setIsAddTimeModalVisible(true),
            type: 'ICON_BUTTON',
            variant: 'outlined',
          },
          {
            // TODO: to be implemented
            disabled: !hasDuration,
            icon: <AddIcon />,
            isVisible: inStatusNew,
            onClick: () =>
              storeDispatch.tasks.promoteToInProgress({ id: routineTask.id }),
            type: 'ICON_BUTTON',
            variant: 'outlined',
          },
        ]}
        title={routineTask.name}
        subtitle={durationInMins}
      />

      {isAddTimeModalVisible && (
        <AddTimeModal
          taskId={routineTask.id}
          onClose={() => setIsAddTimeModalVisible(false)}
        />
      )}
    </>
  )
}

export default RoutineTask
