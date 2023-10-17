import AddIcon from '@mui/icons-material/Add'
import { Card, IconButton, Stack, Typography } from '@mui/joy'
import { FC, useState } from 'react'
import { SingleTask } from '../../../../../../store/reducers/tasks/types'
import { useStoreDispatch } from '../../../../../../store'
import getDurationString from '../utils/getDurationString'
import MoreTimeIcon from '@mui/icons-material/MoreTime'
import AddTimeModal from './AddTimeModal'

type Props = {
  routineTask: SingleTask
}

const RoutineTask: FC<Props> = ({ routineTask }) => {
  const storeDispatch = useStoreDispatch()

  const [isAddTimeModalVisible, setIsAddTimeModalVisible] = useState(false)

  const inStatusNew = routineTask.routineMeta?.status === 'NEW'
  const inStatusInProgress = routineTask.routineMeta?.status === 'IN_PROGRESS'
  const hasDuration = !!routineTask.duration

  return (
    <Card variant="soft">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack>
          <Typography>{routineTask.name}</Typography>

          {!inStatusInProgress && (
            <Typography level="body-xs">
              {getDurationString(routineTask.duration)}
            </Typography>
          )}
        </Stack>

        <Stack direction="row" spacing={0.5} alignItems="center">
          {inStatusInProgress && hasDuration && (
            <Typography level="body-xs">
              {getDurationString(routineTask.duration)}
            </Typography>
          )}

          {!hasDuration && (
            <IconButton
              variant="outlined"
              onClick={() => {
                setIsAddTimeModalVisible(true)
                // storeDispatch.tasks.addTime({
                //   id: routineTask.id,
                //   duration: 10,
                // })
              }}
            >
              <MoreTimeIcon />
            </IconButton>
          )}

          {inStatusNew && (
            <IconButton
              variant="outlined"
              onClick={() =>
                storeDispatch.tasks.promoteToInProgress(routineTask.id)
              }
            >
              <AddIcon />
            </IconButton>
          )}
        </Stack>
      </Stack>

      {isAddTimeModalVisible && (
        <AddTimeModal
          taskId={routineTask.id}
          onClose={() => setIsAddTimeModalVisible(false)}
        />
      )}
    </Card>
  )
}

export default RoutineTask
