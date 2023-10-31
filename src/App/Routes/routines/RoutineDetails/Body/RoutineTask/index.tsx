import AddIcon from '@mui/icons-material/Add'
import MoreTimeIcon from '@mui/icons-material/MoreTime'
import { CommonElementProps, SmallCard } from 'components'
import { useModal, useStoreDispatch, useStoreState } from 'hooks'
import { FC } from 'react'
import { SingleTask } from 'schemas'
import { getDurationString } from 'utils'
import AddTimeModal from './AddTimeModal'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

type Props = {
  task: SingleTask
  isEditingOrder: boolean
  onDown?: () => void
  onUp?: () => void
}

const RoutineTask: FC<Props> = ({ isEditingOrder, onDown, onUp, task }) => {
  const storeState = useStoreState()
  const storeDispatch = useStoreDispatch()
  const {
    isModalVisible: isAddTimeModalVisible,
    setIsModalVisible: setIsAddTimeModalVisible,
  } = useModal()

  const inStatusNew = task.routineMeta?.status === 'NEW'
  const hasDuration = !!task.durationInSeconds
  const durationInMins = getDurationString(task.durationInSeconds, {
    shouldShowEmptyMessage: true,
  })

  const alfa: Array<CommonElementProps> =
    durationInMins && !inStatusNew && !isEditingOrder
      ? [
          {
            content: durationInMins,
            level: 'body-sm',
            type: 'TEXT',
          },
        ]
      : []

  let contextName: string
  if (task.contextId) {
    const context = storeState.getContextsById(task.contextId)
    if (!context) {
      throw new Error('Error 231')
    }

    contextName = context.name
  } else {
    contextName = 'Missing context'
  }

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
              storeDispatch.tasks.promoteToInProgress({
                id: task.id,
              }),
            type: 'ICON_BUTTON',
            variant: 'outlined',
          },
          // LIST EDIT
          {
            disabled: !onDown,
            icon: <ArrowDownwardIcon />,
            isVisible: isEditingOrder === true,
            onClick: () => onDown?.(),
            type: 'ICON_BUTTON',
            variant: 'outlined',
          },
          {
            disabled: !onUp,
            icon: <ArrowUpwardIcon />,
            isVisible: isEditingOrder === true,
            onClick: () => onUp?.(),
            type: 'ICON_BUTTON',
            variant: 'outlined',
          },
          //
          ...alfa,
        ]}
        title={task.name}
        subtitle={
          inStatusNew || isEditingOrder
            ? `${contextName} | ${durationInMins}`
            : contextName
        }
      />

      <AddTimeModal
        isOpen={isAddTimeModalVisible}
        taskId={task.id}
        onClose={() => setIsAddTimeModalVisible(false)}
      />
    </>
  )
}

export default RoutineTask
