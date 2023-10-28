import { Typography } from '@mui/joy'
import { DetailsElem } from 'components'
import { DAYS } from 'config'
import { SingleRoutine } from 'schemas'
import { getDateStringFromUnix, getIsExpired } from 'utils'

const getDetailsGenericProps = (routine: SingleRoutine) => {
  const isExpired = routine.endDateInUnix
    ? getIsExpired(routine.endDateInUnix)
    : false
  const rawData: Array<DetailsElem> = [
    {
      label: 'DAYS',
      value: (
        <>
          {routine.days.map((d, index) => {
            const label = DAYS[index].slice(0, 1)

            return (
              <Typography key={index} variant={d ? 'outlined' : 'plain'}>
                {label}
              </Typography>
            )
          })}
        </>
      ),
    },
    {
      color: isExpired ? 'danger' : undefined,
      label: 'END DATE in UNIX',
      value: routine.endDateInUnix ? routine.endDateInUnix : '∞',
    },
    {
      label: 'ID',
      value: routine.id,
    },
    {
      label: 'INTERVAL',
      value: routine.interval,
    },
    {
      label: 'SCORE',
      value: routine.score,
    },
    {
      label: 'STATUS',
      value: routine.status,
    },
    {
      label: 'START DATE IN UNIX',
      value: routine.startDateInUnix,
    },
    {
      label: 'TIME',
      value: routine.time ?? 'undefined',
    },
  ]

  const generatedData: Array<DetailsElem> = [
    {
      label: 'END DATE',
      value: routine.endDateInUnix
        ? getDateStringFromUnix(routine.endDateInUnix)
        : '∞',
    },
    {
      label: 'START DATE',
      value: getDateStringFromUnix(routine.startDateInUnix),
    },
  ]

  return {
    generatedData,
    rawData,
  }
}

export default getDetailsGenericProps
