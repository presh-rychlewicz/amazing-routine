import { Grid } from '@mui/joy'
import { FC } from 'react'
import SingleElement from './SingleElement'
import { ElementVariant, getElement } from './utils'

type Props = {
  topLeft?: ElementVariant
  topRight?: ElementVariant | Array<ElementVariant>
  bottomLeft?: ElementVariant
  bottomRight?: ElementVariant | Array<ElementVariant>
}

const HeaderGeneric: FC<Props> = ({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}) => {
  if (!topLeft && !topRight && !bottomLeft && !bottomRight) {
    return null
  }

  const topLeftElem = getElement(topLeft)
  const topRightElem = getElement(topRight)
  const bottomLeftElem = getElement(bottomLeft)
  const bottomRightElem = getElement(bottomRight)

  const hasBottom = bottomLeftElem || bottomRightElem

  return (
    <Grid
      display="grid"
      gridTemplateColumns="repeat(2, 1fr)"
      gridTemplateRows={`repeat(${hasBottom ? 2 : 1}, auto)`}
      gridTemplateAreas={`
          'top-left top-right'
          'bottom-left bottom-right'
        `}
      marginBottom={2}
    >
      <SingleElement element={topLeftElem} gridArea="top-left" />

      <SingleElement
        element={topRightElem}
        justifySelf="end"
        gridArea="top-right"
      />

      <SingleElement
        element={bottomLeftElem}
        alignSelf="end"
        gridArea="bottom-left"
      />

      <SingleElement
        element={bottomRightElem}
        justifySelf="end"
        alignSelf="end"
        gridArea="bottom-right"
      />
    </Grid>
  )
}

export default HeaderGeneric
