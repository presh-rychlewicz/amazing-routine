/* eslint-disable @typescript-eslint/no-unused-vars */
import { Stack } from '@mui/joy'
import { ElementList } from 'components'
import { FC, useState } from 'react'
import {
  RoutineMetaStatus,
  SingleRoutine,
  SingleTask,
  StatusDataElem,
} from 'schemas'
import RoutineTask from './RoutineTask'
import Stats from './Stats'
import { getEstimation } from './utils'
import EditNoteIcon from '@mui/icons-material/EditNote'
import { useStoreDispatch } from 'hooks'

type Props = Pick<SingleRoutine, 'pastRuns'> & {
  statusData: Array<StatusDataElem>
}

const Body: FC<Props> = ({ pastRuns, statusData }) => {
  const storeDispatch = useStoreDispatch()
  const [isEditingOrder, setIsEditingOrder] = useState(
    Object.fromEntries(statusData.map((a) => a.status).map((s) => [s, false]))
  )

  return (
    <Stack component="main" spacing={2}>
      <Stats pastRuns={pastRuns} />

      <ElementList
        emptyStateMessage="No tasks :("
        elements={statusData}
        spacingBetweenElements="medium"
        renderElement={({ status, tasks }) => {
          const hasMultipleTasks = tasks.length > 1
          const isEditingList = isEditingOrder[status]

          return (
            <ElementList
              right={{
                disabled: !hasMultipleTasks,
                icon: <EditNoteIcon />,
                onClick: () =>
                  setIsEditingOrder((prev) => ({
                    ...prev,
                    [status]: !prev[status],
                  })),
                type: 'ICON_BUTTON',
                variant: isEditingList ? 'solid' : 'plain',
              }}
              shouldShowEmptyState={false}
              key={status}
              title={titleMapping[status]}
              subtitle={subtitleMapping[status](tasks)}
              elements={tasks}
              renderElement={(routineTask, index, aray) => {
                const isFirstOnTheList = index === 0
                const isLastOnTheList = index === aray.length - 1

                return (
                  <RoutineTask
                    {...(!isLastOnTheList && {
                      onDown: () =>
                        storeDispatch.tasks.updateIndex({
                          downId: aray[index + 1].id,
                          upId: routineTask.id,
                        }),
                    })}
                    {...(!isFirstOnTheList && {
                      onUp: () =>
                        storeDispatch.tasks.updateIndex({
                          downId: aray[index - 1].id,
                          upId: routineTask.id,
                        }),
                    })}
                    isEditingOrder={isEditingList}
                    routineTask={routineTask}
                    key={routineTask.id}
                  />
                )
              }}
            />
          )
        }}
      />
    </Stack>
  )
}

const titleMapping: Record<RoutineMetaStatus, string> = {
  IN_PROGRESS: 'Current',
  NEW: 'Incoming',
}

const subtitleMapping: Record<
  RoutineMetaStatus,
  (tasks: Array<SingleTask>) => string
> = {
  IN_PROGRESS: (tasks) => getEstimation(tasks),
  NEW: (tasks) => getEstimation(tasks),
}

export default Body
