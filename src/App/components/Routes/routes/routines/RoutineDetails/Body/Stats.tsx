import { Stack } from '@mui/joy'
import { ElementList, SmallCard } from 'components'
import dayjs from 'dayjs'
import { FC } from 'react'
import { SingleRoutine } from 'schemas'
import { getDateStringFromUnix, getTimeStringFromUnix } from 'utils'

type Props = Pick<SingleRoutine, 'pastRuns'>

const Stats: FC<Props> = ({ pastRuns }) => {
  // What should be here?
  // - each task should have score
  // - ?routine score:
  // --- each routine should have score OR
  // --- live calculation based on child tasks

  // what is important to display
  // - previous day score
  // - so far score

  const hasAnyPastRuns = !!pastRuns.length
  if (!hasAnyPastRuns) {
    return null
  }

  // const pastRunsDates = pastRuns.map((p) => dayjs.unix(p.timestamp))
  // console.log(pastRunsDates)

  // const today = dayjs()
  // const previousDays = [...new Array(5)]
  //   .map((_, i) => today.subtract(i + 1, 'days'))
  //   .reverse()
  // const days = [...previousDays, today, today.add(1, 'day')]
  // const days = pastRunsDates

  // const data = days.map((a, i) => ({
  //   label2: a.format('YYYY-MM-DD'),
  //   label: a.format('DD/MM HH:mm:ss'),

  //   value: i + 1,
  // }))

  // console.log(data)

  const pastRunsSorted = [...pastRuns].sort((prev, next) =>
    dayjs.unix(prev.timestamp).isAfter(dayjs.unix(next.timestamp)) ? -1 : 1
  )

  return (
    <Stack spacing={1}>
      {/* {hasAnyPastRuns ? null : (
        // <BarChart
        //   leftAxis={null}
        //   xAxis={[
        //     {
        //       id: 'barCategories',
        //       data: data.map((d) => d.label),
        //       scaleType: 'band',
        //     },
        //   ]}
        //   margin={{
        //     left: 10,
        //     right: 10,
        //     top: 0,
        //     bottom: 30,
        //   }}
        //   series={[
        //     {
        //       data: data.map((d) => d.value),
        //     },
        //   ]}
        //   height={125}
        //   sx={{
        //     '.MuiChartsAxis-line': {
        //       display: 'none',
        //     },
        //     '.MuiChartsAxis-tick': {
        //       display: 'none',
        //     },
        //   }}
        // />
        <EmptyState message="There is no any past runs"></EmptyState>
      )} */}

      <ElementList
        elements={pastRunsSorted}
        title="Past runs"
        shouldShowEmptyState={false}
        renderElement={(p) => (
          <SmallCard
            key={p.id}
            title={getDateStringFromUnix(p.timestamp)}
            subtitle={getTimeStringFromUnix(p.timestamp)}
            elements={[
              {
                content: `D1|F9|S3`,
                level: 'body-xs',
                type: 'TEXT',
              },
            ]}
          />
        )}
      />
    </Stack>
  )
}

export default Stats
