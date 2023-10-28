import { Grid } from '@mui/joy'
import { FC } from 'react'
import { CommonElementProps } from '../CommonElement'
import { Area } from './components'

type Props = PropsBase

const HeaderGeneric: FC<Props> = (props) => {
  if (props.mergedRight) {
    if (!props.topLeft && !props.right && !props.bottomLeft) {
      return null
    }
  } else {
    if (
      !props.topLeft &&
      !props.topRight &&
      !props.bottomLeft &&
      !props.bottomRight
    ) {
      return null
    }
  }

  let hasBottom = false
  if (props.mergedRight) {
    hasBottom = !!props.bottomLeft
  } else {
    hasBottom = !!(props.bottomLeft || props.bottomRight)
  }

  return (
    <Grid
      component="header"
      display="grid"
      gridTemplateColumns="repeat(2, 1fr)"
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      gridTemplateRows={`repeat(${hasBottom ? 2 : 1}, auto)`}
      gridTemplateAreas={
        GRID_TEMPLATE_AREAS[props.mergedRight ? 'elements3' : 'elements4']
      }
    >
      <Area elementVariant={props.topLeft} gridArea={GRID_AREAS.tl} />

      <Area
        elementVariant={props.bottomLeft}
        gridArea={GRID_AREAS.bl}
        alignSelf="end"
      />

      {props.mergedRight ? (
        <Area
          elementVariant={props.right}
          gridArea={GRID_AREAS.r}
          // TEMP
          justifySelf="end"
          alignSelf="end"
          //
        />
      ) : (
        <>
          <Area
            elementVariant={props.topRight}
            gridArea={GRID_AREAS.tr}
            justifySelf="end"
          />

          <Area
            elementVariant={props.bottomRight}
            gridArea={GRID_AREAS.br}
            justifySelf="end"
            alignSelf="end"
          />
        </>
      )}
    </Grid>
  )
}

const GRID_AREAS = {
  bl: 'bottom-left',
  br: 'bottom-right',
  r: 'right',
  tl: 'top-left',
  tr: 'top-right',
}

const GRID_TEMPLATE_AREAS = {
  elements3: `
  '${GRID_AREAS.tl} ${GRID_AREAS.r}'
  '${GRID_AREAS.bl} ${GRID_AREAS.r}'
  `,
  elements4: `
  '${GRID_AREAS.tl} ${GRID_AREAS.tr}'
  '${GRID_AREAS.bl} ${GRID_AREAS.br}'
  `,
}

type Content = CommonElementProps | Array<CommonElementProps>
type PropsBase = {
  topLeft?: Content
  bottomLeft?: Content
} & (
  | {
      mergedRight?: false
      topRight?: Content
      bottomRight?: Content
    }
  | {
      mergedRight: true
      right?: Content
    }
)

export default HeaderGeneric
export type { CommonElementProps }
