import { Card, IconButton, Stack, Typography } from '@mui/joy'
import { SingleTask } from '../../../../store/reducers/tasks/types'
import { FC, useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

type Props = {
  task: SingleTask
}
const Task: FC<Props> = ({ task }) => {
  const [hasOptionsOpen, setHasOptionsOpen] = useState(false)

  return (
    <Card>
      <Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography level="h4">{task.name}</Typography>

          <IconButton
            size="sm"
            variant={hasOptionsOpen ? 'solid' : 'soft'}
            onClick={() => setHasOptionsOpen((prev) => !prev)}
          >
            <MoreHorizIcon />
          </IconButton>
        </Stack>

        <Stack></Stack>

        {task.note && <Typography level="body-xs">{task.note}</Typography>}
      </Stack>
    </Card>
  )
}

export default Task
