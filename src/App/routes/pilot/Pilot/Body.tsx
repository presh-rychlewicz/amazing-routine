import DoneOutlineIcon from '@mui/icons-material/DoneOutline'
import PauseIcon from '@mui/icons-material/Pause'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import { IconButton, Stack, Typography } from '@mui/joy'
import dayjs from 'dayjs'
import { FC, ReactNode, useMemo, useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { SingleTask } from '../../../../store/reducers/tasks/types'

type Props = {
  tasks: Array<SingleTask>
}
const Body: FC<Props> = ({ tasks }) => {
  const initialTaskData = tasks.map(
    (t, index, aray): TaskDataElem => ({
      id: t.id,
      name: t.name,
      durationInSeconds: t.duration
        ? dayjs.duration(t.duration, 'minutes').asSeconds()
        : null,
      isDone: false,
      index,
      isFirst: index === 0,
      isLast: index === aray.length - 1,
    })
  )

  const [taskData, setTaskData] = useState(initialTaskData)
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentTaskMemo = useMemo(
    () => taskData[currentIndex],
    [taskData, currentIndex]
  )

  console.log({
    taskData,
  })

  const [isPlaying, setIsPlaying] = useState(true)

  // useEffect(() => {
  // setCurrentTask(taskData)
  // }, [taskData])

  const controlButtons: Array<ControlButton> = [
    {
      disabled: false,
      icon: isPlaying ? <PauseIcon /> : <PlayArrowIcon />,
      onClick: () => setIsPlaying((prev) => !prev),
    },
    {
      disabled: false,
      icon: <DoneOutlineIcon />,
      onClick: () => setTaskData((prev) => [...prev].slice(1)),
    },
    {
      disabled: currentTaskMemo.isLast,
      icon: <SkipNextIcon />,
      onClick: () => setCurrentIndex((prev) => prev + 1),
    },
  ]

  return (
    <Stack alignItems="center" spacing={3}>
      <Typography textAlign="center" level="h2">
        {currentTaskMemo.name}
      </Typography>

      <CountdownCircleTimer
        key={currentTaskMemo.id}
        isPlaying={isPlaying}
        isSmoothColorTransition={false}
        strokeWidth={20}
        size={COUNTDOWN_SIZE}
        duration={currentTaskMemo.durationInSeconds ?? 0}
        colors={['#5e6c76', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[60, 30, 15, 0]}
      >
        {({ remainingTime }) => <Typography>{remainingTime}</Typography>}
      </CountdownCircleTimer>

      <Stack
        direction="row"
        width={`${COUNTDOWN_SIZE}px`}
        alignItems="center"
        justifyContent="space-between"
      >
        {controlButtons.map(({ onClick, disabled, icon }, index) => (
          <IconButton
            key={index}
            onClick={onClick}
            variant="soft"
            disabled={disabled}
            size="lg"
          >
            {icon}
          </IconButton>
        ))}
      </Stack>
    </Stack>
  )
}

const COUNTDOWN_SIZE = 300

type ControlButton = {
  disabled: boolean
  icon: ReactNode
  onClick: () => void
}

type TaskDataElem = {
  name: SingleTask['name']
  durationInSeconds: SingleTask['duration'] | null
  isDone: boolean
  index: number
  isFirst: boolean
  isLast: boolean
  id: SingleTask['id']
}

export default Body
