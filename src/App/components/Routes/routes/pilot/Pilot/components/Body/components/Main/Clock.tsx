import { Typography } from '@mui/joy'
import { Dispatch, FC, SetStateAction } from 'react'
import { ColorHex, CountdownCircleTimer } from 'react-countdown-circle-timer'
import { SingleTask } from 'schemas'
import { getDurationString } from 'utils'

type Props = {
  taskId: SingleTask['id']
  isPlaying: boolean
  durationInSeconds: number
  setElapsedTime: Dispatch<SetStateAction<number>>
}

const Clock: FC<Props> = ({
  setElapsedTime,
  taskId,
  isPlaying,
  durationInSeconds,
}) => (
  <CountdownCircleTimer
    key={taskId}
    isPlaying={isPlaying}
    duration={durationInSeconds}
    isSmoothColorTransition={false}
    strokeWidth={20}
    size={CLOCK_SIZE}
    colors={CLOCK_COLORS}
    colorsTime={CLOCK_COLORS_TIME}
    onUpdate={(remainingTime) =>
      setElapsedTime(durationInSeconds - remainingTime)
    }
  >
    {({ remainingTime }) => {
      const remainingTimeFormatted = getDurationString(remainingTime)

      const visibleText = remainingTimeFormatted ?? 'Time elapsed'

      return <Typography>{visibleText}</Typography>
    }}
  </CountdownCircleTimer>
)

const CLOCK_COLORS: [ColorHex, ColorHex, ColorHex, ColorHex] = [
  '#5e6c76',
  '#F7B801',
  '#A30000',
  '#A30000',
]
const CLOCK_COLORS_TIME: [number, number, number, number] = [60, 30, 15, 0]
const CLOCK_SIZE = 280

export default Clock
export { CLOCK_SIZE }
