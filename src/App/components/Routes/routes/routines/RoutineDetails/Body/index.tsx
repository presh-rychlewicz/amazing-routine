import { Stack } from '@mui/joy'
import { ElementList } from 'components'
import startCase from 'lodash.startcase'
import { FC } from 'react'
import {
  RoutineMetaStatus,
  SingleRoutine,
  SingleTask,
  StatusDataElem,
} from 'schemas'
import RoutineTask from './RoutineTask'
import Stats from './Stats'
import { getEstimation } from './utils'

type Props = Pick<SingleRoutine, 'pastRuns'> & {
  statusData: Array<StatusDataElem>
}

const Body: FC<Props> = ({ pastRuns, statusData }) => (
  <Stack component="main" spacing={2}>
    <Stats pastRuns={pastRuns} />

    <ElementList
      emptyStateMessage="No tasks :("
      elements={statusData}
      spacingBetweenElements="medium"
      renderElement={({ status, tasks }) => (
        <ElementList
          shouldShowEmptyState={false}
          key={status}
          title={startCase(status.toLowerCase())}
          subtitle={subtitleMapping[status](tasks)}
          elements={tasks}
          renderElement={(routineTask) => (
            <RoutineTask routineTask={routineTask} key={routineTask.id} />
          )}
        />
      )}
    />
  </Stack>
)

const subtitleMapping: Record<
  RoutineMetaStatus,
  (tasks: Array<SingleTask>) => string
> = {
  IN_PROGRESS: (tasks) => getEstimation(tasks),
  NEW: (tasks) => getEstimation(tasks),
}

export default Body
