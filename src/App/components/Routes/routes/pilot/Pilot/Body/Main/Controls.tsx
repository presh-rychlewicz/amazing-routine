import DangerousIcon from '@mui/icons-material/Dangerous'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline'
import ListIcon from '@mui/icons-material/List'
import PauseIcon from '@mui/icons-material/Pause'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import { ColorPaletteProp, Stack, VariantProp } from '@mui/joy'
import IconButtonElement from 'components/CommonElement/IconButtonElement'
import { FC, ReactNode } from 'react'
import { CLOCK_SIZE } from './Clock'

type Props = {
  isPlaying: boolean
  onSkip: () => void
  onPlayOrPauseClick: () => void
  onDone: () => void
  onFail: () => void
  canDone: boolean
  canSkip: boolean
  toggleList: () => void
}

const Controls: FC<Props> = ({
  onSkip,
  onFail,
  onDone,
  isPlaying,
  canDone,
  canSkip,
  onPlayOrPauseClick,
  toggleList,
}) => {
  const controlButtons: Array<ControlButton> = [
    {
      color: isPlaying ? 'neutral' : 'success',
      disabled: false,
      icon: isPlaying ? <PauseIcon /> : <PlayArrowIcon />,
      onClick: onPlayOrPauseClick,
    },
    {
      disabled: !isPlaying,
      icon: <ListIcon />,
      onClick: toggleList,
    },
    {
      color: 'success',
      disabled: !canDone || !isPlaying,
      icon: <DoneOutlineIcon />,
      onClick: onDone,
    },
    {
      disabled: !canSkip || !isPlaying,
      icon: <SkipNextIcon />,
      onClick: onSkip,
    },
    {
      color: 'danger',
      disabled: !isPlaying,
      icon: <DangerousIcon />,
      onClick: onFail,
      variant: 'outlined',
    },
  ]

  return (
    <Stack
      direction="row"
      width={`${CLOCK_SIZE}px`}
      alignItems="center"
      justifyContent="space-between"
    >
      {controlButtons.map((b, index) => (
        <IconButtonElement variant="soft" {...b} key={index} />
      ))}
    </Stack>
  )
}

type ControlButton = {
  disabled: boolean
  icon: ReactNode
  onClick: () => void
  color?: ColorPaletteProp
  variant?: VariantProp
}

export default Controls
