import { Stack } from '@mui/joy'
import { FC } from 'react'
import Clock, { ClockProps } from './Clock'
import Controls, { ControlsProps } from './Controls'
import { useResize } from './hooks'

type MainProps = {
  controlsProps: Omit<ControlsProps, 'elementsWidth'>
  clockProps: Omit<ClockProps, 'elementsWidth'>
}

const Main: FC<MainProps> = ({ clockProps, controlsProps }) => {
  const { elementsWidth, ref } = useResize()

  return (
    <Stack ref={ref} alignItems="center" spacing={3}>
      <Clock {...clockProps} elementsWidth={elementsWidth} />

      <Controls {...controlsProps} elementsWidth={elementsWidth} />
    </Stack>
  )
}

export default Main
export type { MainProps }
