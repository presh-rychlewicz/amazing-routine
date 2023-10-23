import { Stack, Typography } from '@mui/joy'
import { Dispatch, FC, SetStateAction } from 'react'
import { TaskDataElem } from 'schemas'
import Clock from './Clock'
import Controls from './Controls'

type Props = {
  currentTask: TaskDataElem
  duration: number
  isPlaying: boolean
  onPlayOrPauseClick: () => void
  onDone: () => void
  onSkip: () => void
  onFail: () => void
  toggleList: () => void
  setElapsedTime: Dispatch<SetStateAction<number>>
}

const Main: FC<Props> = ({
  onPlayOrPauseClick,
  currentTask,
  duration,
  isPlaying,
  onDone,
  toggleList,
  onSkip,
  onFail,
  setElapsedTime,
}) => (
  <Stack alignItems="center" spacing={3}>
    <Stack>
      <Typography textAlign="center" level="h2">
        {currentTask.name}
      </Typography>

      <Typography textAlign="center" level="body-md">
        {/* TODO: Context */}
        Kitchen
      </Typography>
    </Stack>

    <Clock
      setElapsedTime={setElapsedTime}
      taskId={currentTask.id}
      durationInSeconds={duration}
      isPlaying={isPlaying}
    />

    <Controls
      canSkip={!currentTask.isSkipped && !currentTask.isDone}
      canDone={!currentTask.isDone}
      onDone={onDone}
      onPlayOrPauseClick={onPlayOrPauseClick}
      isPlaying={isPlaying}
      onFail={onFail}
      onSkip={onSkip}
      toggleList={toggleList}
    />
  </Stack>
)

export default Main
