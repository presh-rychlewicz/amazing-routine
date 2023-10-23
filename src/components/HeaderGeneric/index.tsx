import { Grid } from '@mui/joy'
import { FC } from 'react'
import { CommonElementProps } from '../CommonElement'
import { Area } from './components'

type Props = PropsBase

const HeaderGeneric: FC<Props> = ({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}) => {
  if (!topLeft && !topRight && !bottomLeft && !bottomRight) {
    return null
  }

  const hasBottom = !!(bottomLeft || bottomRight)

  return (
    <Grid
      component="header"
      display="grid"
      gridTemplateColumns="repeat(2, 1fr)"
      gridTemplateRows={`repeat(${hasBottom ? 2 : 1}, auto)`}
      gridTemplateAreas={`
          '${GRID_AREA.tl} ${GRID_AREA.tr}'
          '${GRID_AREA.bl} ${GRID_AREA.br}'
        `}
    >
      <Area elementVariant={topLeft} gridArea={GRID_AREA.tl} />

      <Area
        elementVariant={topRight}
        gridArea={GRID_AREA.tr}
        justifySelf="end"
      />

      <Area
        elementVariant={bottomLeft}
        gridArea={GRID_AREA.bl}
        alignSelf="end"
      />

      <Area
        elementVariant={bottomRight}
        gridArea={GRID_AREA.br}
        justifySelf="end"
        alignSelf="end"
      />
    </Grid>
  )
}

const GRID_AREA = {
  bl: 'bottom-left',
  br: 'bottom-right',
  tl: 'top-left',
  tr: 'top-right',
}

type PropsBase = {
  [key in 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight']?:
    | CommonElementProps
    | Array<CommonElementProps>
}

export default HeaderGeneric
export type { CommonElementProps }
