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
import { MISSING_CONTEXT_VALUE } from 'config'

type Props = {
  task: SingleTask
  isEditingOrder: boolean
  onDown?: () => void
  onUp?: () => void
}

const RoutineTask: FC<Props> = ({ isEditingOrder, onDown, onUp, task }) => {
  const storeState = useStoreState()
  const storeDispatch = useStoreDispatch()
  const addTimeModalProps = useModal()

  const { durationInSeconds, contextId, id, name, routineMeta } = task

  const inStatusNew = routineMeta?.status === 'NEW'
  const hasDuration = !!durationInSeconds
  const durationInMins = getDurationString(durationInSeconds, {
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

  const contextName =
    (contextId && storeState.getContextsById(contextId)?.name) ||
    MISSING_CONTEXT_VALUE

  const subtitle =
    inStatusNew || isEditingOrder
      ? `${contextName} | ${durationInMins}`
      : contextName

  return (
    <>
      <SmallCard
        elements={[
          {
            icon: <MoreTimeIcon />,
            isVisible: !hasDuration && !isEditingOrder,
            onClick: addTimeModalProps.show,
            type: 'ICON_BUTTON',
            variant: 'outlined',
          },
          {
            // TODO: to be implemented
            disabled: !hasDuration,
            icon: <AddIcon />,
            isVisible: inStatusNew && !isEditingOrder,
            onClick: () => storeDispatch.tasks.promoteToInProgress({ id }),
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
        title={name}
        subtitle={subtitle}
      />

      <AddTimeModal
        isOpen={addTimeModalProps.isOpen}
        taskId={id}
        onClose={addTimeModalProps.hide}
      />
    </>
  )
}

export default RoutineTask
