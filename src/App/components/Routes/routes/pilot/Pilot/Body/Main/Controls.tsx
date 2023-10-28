import DangerousIcon from '@mui/icons-material/Dangerous'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline'
import ListIcon from '@mui/icons-material/List'
import PauseIcon from '@mui/icons-material/Pause'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import { ColorPaletteProp, Grid, VariantProp } from '@mui/joy'
import IconButtonElement from 'components/CommonElement/IconButtonElement'
import { FC, ReactNode } from 'react'

type ControlsProps = {
  elementsWidth: number
  isDoneDisabled: boolean
  isFailDisabled: boolean
  isListDisabled: boolean
  isPlaying: boolean
  isPlayOrPauseDisabled: boolean
  isSkipDisabled: boolean
  onDone: () => void
  onFail: () => void
  onPlayOrPauseClick: () => void
  onSkip: () => void
  toggleList: () => void
}

const Controls: FC<ControlsProps> = ({
  isFailDisabled,
  elementsWidth,
  isDoneDisabled,
  isListDisabled,
  isPlaying,
  isPlayOrPauseDisabled,
  isSkipDisabled,
  onDone,
  onFail,
  onPlayOrPauseClick,
  onSkip,
  toggleList,
}) => {
  const buttons: Array<ControlButton> = [
    {
      disabled: isListDisabled,
      gridArea: GRID_AREAS.list,
      icon: <ListIcon />,
      onClick: toggleList,
    },
    {
      color: isPlaying ? 'neutral' : 'success',
      disabled: isPlayOrPauseDisabled,
      gridArea: GRID_AREAS.stopOrPlay,
      icon: isPlaying ? <PauseIcon /> : <PlayArrowIcon />,
      onClick: onPlayOrPauseClick,
    },
    {
      disabled: isSkipDisabled,
      gridArea: GRID_AREAS.skip,
      icon: <SkipNextIcon />,
      onClick: onSkip,
    },
    {
      color: 'danger',
      disabled: isFailDisabled,
      gridArea: GRID_AREAS.fail,
      icon: <DangerousIcon />,
      onClick: onFail,
    },
    {
      color: 'success',
      disabled: isDoneDisabled,
      gridArea: GRID_AREAS.done,
      icon: <DoneOutlineIcon />,
      onClick: onDone,
    },
  ]

  return (
    <Grid
      display="grid"
      width={elementsWidth}
      gridTemplateColumns="repeat(2,1fr)"
      gridTemplateRows="repeat(auto, 50px)"
      gridTemplateAreas={`
        '${GRID_AREAS.list} ${GRID_AREAS.stopOrPlay}'
        '${GRID_AREAS.skip} ${GRID_AREAS.fail}'
        '${GRID_AREAS.done} ${GRID_AREAS.done}'
      `}
      gap={2}
      height="100%"
    >
      {buttons.map((b, index) => (
        <IconButtonElement
          {...b}
          fullHeight
          fullWidth
          variant="soft"
          key={index}
        />
      ))}
    </Grid>
  )
}

type ControlButton = {
  disabled: boolean
  icon: ReactNode
  onClick: () => void
  color?: ColorPaletteProp
  variant?: VariantProp
  gridArea: string
}

const GRID_AREAS = {
  done: 'done',
  fail: 'fail',
  list: 'list',
  skip: 'skip',
  stopOrPlay: 'stop-or-play',
}

export default Controls
export type { ControlsProps }
