import AddIcon from '@mui/icons-material/Add'
import MoreTimeIcon from '@mui/icons-material/MoreTime'
import { SmallCard } from 'components'
import { useModal, useStoreDispatch } from 'hooks'
import { FC } from 'react'
import { SingleTask } from 'schemas'
import { getDurationString } from 'utils'
import AddTimeModal from './AddTimeModal'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

type Props = {
  routineTask: SingleTask
  isEditingOrder: boolean
  onDown?: () => void
  onUp?: () => void
}

const RoutineTask: FC<Props> = ({
  isEditingOrder,
  onDown,
  onUp,
  routineTask,
}) => {
  const storeDispatch = useStoreDispatch()
  const {
    isModalVisible: isAddTimeModalVisible,
    setIsModalVisible: setIsAddTimeModalVisible,
  } = useModal()

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
            isVisible: !hasDuration && !isEditingOrder,
            onClick: () => setIsAddTimeModalVisible(true),
            type: 'ICON_BUTTON',
            variant: 'outlined',
          },
          {
            // TODO: to be implemented
            disabled: !hasDuration,
            icon: <AddIcon />,
            isVisible: inStatusNew && !isEditingOrder,
            onClick: () =>
              storeDispatch.tasks.promoteToInProgress({ id: routineTask.id }),
            type: 'ICON_BUTTON',
            variant: 'outlined',
          },
          // LIST EDIT
          {
            disabled: !onDown,
            icon: <ArrowDownwardIcon />,
            isVisible: isEditingOrder,
            onClick: () => onDown?.(),
            type: 'ICON_BUTTON',
            variant: 'outlined',
          },
          {
            disabled: !onUp,
            icon: <ArrowUpwardIcon />,
            isVisible: isEditingOrder,
            onClick: () => onUp?.(),
            type: 'ICON_BUTTON',
            variant: 'outlined',
          },
          //
        ]}
        title={routineTask.name}
        subtitle={durationInMins}
      />

      <AddTimeModal
        isOpen={isAddTimeModalVisible}
        taskId={routineTask.id}
        onClose={() => setIsAddTimeModalVisible(false)}
      />
    </>
  )
}

export default RoutineTask
