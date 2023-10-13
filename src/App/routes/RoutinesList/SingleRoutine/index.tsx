import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Card, IconButton, Stack, Typography } from '@mui/joy'
import { FC, useState } from 'react'
import { SingleRoutine as SingleRoutineType } from '../../../../store/reducers/routines/types'
import { getIsExpired } from '../../../../utils'
import { DAY_OPTIONS } from '../../AddRoutine'
import Options from './Options'

type Props = {
  shouldShowStatus: boolean
  routine: SingleRoutineType
}

const SingleRoutine: FC<Props> = ({ shouldShowStatus, routine }) => {
  const [hasOptionsOpen, setHasOptionsOpen] = useState(false)
  const isExpired = routine.endDate ? getIsExpired(routine.endDate) : false

  return (
    <Card>
      <Stack>
        {shouldShowStatus && (
          <Typography level="body-xs">[{routine.status}]</Typography>
        )}

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography level="h4">{routine.name}</Typography>

          <IconButton
            size="sm"
            variant={hasOptionsOpen ? 'solid' : 'soft'}
            onClick={() => setHasOptionsOpen((prev) => !prev)}
          >
            <MoreHorizIcon />
          </IconButton>
        </Stack>
      </Stack>

      {hasOptionsOpen && <Options status={routine.status} id={routine.id} />}

      <Stack>
        <Typography level="body-xs">TIME: {routine.time}</Typography>
        <Typography level="body-xs">START DATE: {routine.startDate}</Typography>

        <Typography level="body-xs" color={isExpired ? 'danger' : undefined}>
          END DATE: {routine.endDate ?? '∞'}
        </Typography>

        <Typography level="body-xs">INTERVAL: {routine.interval}</Typography>

        <Typography level="body-xs">
          <Typography>DAYS: </Typography>

          {routine.days.map((d, index) => {
            const label = DAY_OPTIONS[index].slice(0, 1)

            return (
              <Typography key={index} variant={d ? 'outlined' : 'plain'}>
                {label}
              </Typography>
            )
          })}
        </Typography>

        {/* <Typography level="body-xs">⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</Typography> */}
      </Stack>

      <Typography level="body-xs">{routine.note}</Typography>
    </Card>
  )
}

export default SingleRoutine
