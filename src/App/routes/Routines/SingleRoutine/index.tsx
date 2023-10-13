import { Card, IconButton, Stack, Typography } from '@mui/joy'
import { FC, useState } from 'react'
import Options from './Options'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { SingleRoutine as SingleRoutineType } from '../../../../store/reducers/routines/types'

type Props = {
  name: SingleRoutineType['name']
  note: string | undefined
  id: SingleRoutineType['id']
  status: SingleRoutineType['status']
}

const SingleRoutine: FC<Props> = ({ name, note, id, status }) => {
  const [hasOptionsOpen, setHasOptionsOpen] = useState(false)

  return (
    <Card>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography level="h4">{name}</Typography>

        <IconButton
          size="sm"
          variant={hasOptionsOpen ? 'solid' : 'soft'}
          onClick={() => setHasOptionsOpen((prev) => !prev)}
        >
          <MoreHorizIcon />
        </IconButton>
      </Stack>

      {hasOptionsOpen && <Options status={status} id={id} />}

      <Stack>
        <Typography level="body-xs">{note}</Typography>
      </Stack>
    </Card>
  )
}

export default SingleRoutine
