import { Stack, Typography } from '@mui/joy'
import { FC } from 'react'
import { EmptyState } from '../../../../../components'
import { RoutineMetaStatus } from '../../../../../store/reducers/tasks/types'
import RoutineTask from './RoutineTask'
import { StatusDataElem } from '../utils/getStatusData'

type Props = {
  statusData: Array<StatusDataElem>
  hasTasks: boolean
}

const Body: FC<Props> = ({ hasTasks, statusData }) => (
  <Stack spacing={2}>
    {hasTasks ? (
      statusData.map((status) => {
        if (!status.hasTasks) {
          return null
        }

        return (
          <Stack key={status.status} spacing={1}>
            <Stack>
              <Typography level="title-sm">{status.status}</Typography>
              <Typography level="body-xs">
                {statusToInfoMapping[status.status]}
              </Typography>
            </Stack>

            <Stack spacing={1}>
              {status.tasks.map((routineTask, i) => (
                <RoutineTask routineTask={routineTask} key={i} />
              ))}
            </Stack>
          </Stack>
        )
      })
    ) : (
      <EmptyState message="No tasks :(" />
    )}
  </Stack>
)

const statusToInfoMapping: Record<RoutineMetaStatus, string> = {
  // TODO:
  IN_PROGRESS: '',
  NEW: 'Here are tasks awaiting to enter this routine',
}

export default Body
