import { Card, Stack, Typography } from '@mui/joy'
import { FC } from 'react'
import { SingleRoutine } from '../../../../../store/reducers/routines/types'
import { getIsExpired } from '../../../../../utils'
import { DAY_OPTIONS } from '../../AddRoutine'
import Options from './Options'
import { HeaderGeneric } from '../../../../../components'

type Props = {
  shouldShowStatus: boolean
  routine: SingleRoutine
}

const Routine: FC<Props> = ({ shouldShowStatus, routine }) => {
  const isExpired = routine.endDate ? getIsExpired(routine.endDate) : false

  return (
    <Card>
      <Stack>
        {shouldShowStatus && (
          <Typography level="body-xs">[{routine.status}]</Typography>
        )}

        <HeaderGeneric
          topLeft={{
            type: 'TEXT',
            content: routine.name,
            level: 'h4',
          }}
          topRight={{
            type: 'COMPONENT',
            content: <Options id={routine.id} status={routine.status} />,
          }}
        />
      </Stack>

      <Stack>
        <Typography level="body-xs">
          TIME: {routine.time ?? 'undefined'}
        </Typography>
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

      {routine.note && <Typography level="body-xs">{routine.note}</Typography>}
    </Card>
  )
}

export default Routine
