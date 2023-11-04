import EditNoteIcon from '@mui/icons-material/EditNote'
import { Stack } from '@mui/joy'
import { ElementList } from 'components'
import { MISSING_CONTEXT_VALUE, ONE } from 'config'
import { useStoreDispatch, useStoreState } from 'hooks'
import { FC, useState } from 'react'
import { GroupedElement, SingleRoutine, SingleTask } from 'schemas'
import RoutineTask from './RoutineTask'
import Stats from './Stats'
import { getEstimation } from './utils'

type Props = Pick<SingleRoutine, 'pastRuns'> & {
  groupedTasks: Array<GroupedElement<SingleTask>>
}

const Body: FC<Props> = ({ pastRuns, groupedTasks }) => {
  const storeState = useStoreState()
  const storeDispatch = useStoreDispatch()
  const [isEditingOrder, setIsEditingOrder] = useState(
    Object.fromEntries(
      groupedTasks.map((a) => a.groupName).map((s) => [s, false])
    )
  )

  return (
    <Stack component="main" spacing={2}>
      <Stats pastRuns={pastRuns} />

      <ElementList
        emptyStateMessage="No tasks :("
        elements={groupedTasks}
        spacingBetweenElements="medium"
        renderElement={({ groupName, elements, hasMultipleElements }) => {
          const isEditingList = isEditingOrder[groupName]
          const title =
            titleMapping[groupName] ||
            storeState.getContextsById(groupName)?.name
          const subtitle = getEstimation(elements)

          return (
            <ElementList
              right={{
                disabled: !hasMultipleElements,
                icon: <EditNoteIcon />,
                onClick: () =>
                  setIsEditingOrder((prev) => ({
                    ...prev,
                    [groupName]: !prev[groupName],
                  })),
                type: 'ICON_BUTTON',
                variant: isEditingList ? 'solid' : 'plain',
              }}
              shouldShowEmptyState={false}
              key={groupName}
              title={title}
              subtitle={subtitle}
              elements={elements.sort((prev, next) => {
                if (!prev.routineMeta || !next.routineMeta) {
                  return ONE - ONE
                }

                return prev.routineMeta.index < next.routineMeta.index
                  ? ONE
                  : -ONE
              })}
              renderElement={(task, index, aray) => {
                const { id } = task
                const isFirstOnTheList = !index
                const isLastOnTheList = index === aray.length - ONE

                return (
                  <RoutineTask
                    {...(!isFirstOnTheList && {
                      onUp: () =>
                        storeDispatch.tasks.swapIndexes({
                          downId: id,
                          upId: aray[index - ONE].id,
                        }),
                    })}
                    {...(!isLastOnTheList && {
                      onDown: () =>
                        storeDispatch.tasks.swapIndexes({
                          downId: aray[index + ONE].id,
                          upId: id,
                        }),
                    })}
                    isEditingOrder={isEditingList}
                    task={task}
                    key={id}
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

const titleMapping: Record<string, string> = {
  '': MISSING_CONTEXT_VALUE,
  IN_PROGRESS: 'Current',
  NEW: 'Incoming',
}

export default Body
