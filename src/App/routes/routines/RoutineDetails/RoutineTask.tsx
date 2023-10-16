import AddIcon from '@mui/icons-material/Add'
import { Card, IconButton, Stack, Typography } from '@mui/joy'
import { FC } from 'react'
import { SingleTask } from '../../../../store/reducers/tasks/types'
import { useStoreDispatch } from '../../../../store'

type Props = {
  routineTask: SingleTask
}

const RoutineTask: FC<Props> = ({ routineTask }) => {
  const storeDispatch = useStoreDispatch()

  const inStatusNew = routineTask.routineMeta?.status === 'NEW'

  return (
    <Card variant="soft">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography>{routineTask.name}</Typography>

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
    </Card>
  )
}

export default RoutineTask
