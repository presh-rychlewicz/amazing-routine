/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Stack, Typography } from '@mui/joy'
import { Dispatch, FC, SetStateAction } from 'react'
import { ColorHex, CountdownCircleTimer } from 'react-countdown-circle-timer'
import { Id } from 'schemas'
import { getDurationString } from 'utils'

type ClockProps = {
  stepName: string
  subtitle?: string
  isPlaying: boolean
  durationInSeconds: number
  elementsWidth: number
  id: Id
  setElapsedTime: Dispatch<SetStateAction<number>>
}

const Clock: FC<ClockProps> = ({
  setElapsedTime,
  elementsWidth,
  id,
  isPlaying,
  durationInSeconds,
  stepName,
  subtitle,
}) => (
  <CountdownCircleTimer
    key={id}
    isPlaying={isPlaying}
    duration={durationInSeconds}
    isSmoothColorTransition={false}
    strokeWidth={20}
    size={elementsWidth}
    colors={CLOCK_COLORS}
    colorsTime={CLOCK_COLORS_TIME}
    onUpdate={(remainingTime) =>
      setElapsedTime(durationInSeconds - remainingTime)
    }
  >
    {({ remainingTime }) => {
      const remainingTimeFormatted = getDurationString(remainingTime)

      const visibleText = remainingTimeFormatted ?? 'Time elapsed'

      return (
        <Stack justifyContent="center">
          {subtitle && (
            <Typography textAlign="center" level="body-md">
              {subtitle}
            </Typography>
          )}
          <Typography textAlign="center" level="h2">
            {stepName}
          </Typography>

          <Typography textAlign="center">{visibleText}</Typography>
        </Stack>
      )
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

export default Clock
export type { ClockProps }
