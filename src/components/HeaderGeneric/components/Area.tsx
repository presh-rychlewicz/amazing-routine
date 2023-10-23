import { Stack } from '@mui/joy'
import { FC } from 'react'
import CommonElement, { CommonElementProps } from '../../CommonElement'

type Props = {
  elementVariant: CommonElementProps | Array<CommonElementProps> | undefined
  gridArea: string
  alignSelf?: string
  justifySelf?: string
}

const Area: FC<Props> = ({
  elementVariant,
  gridArea,
  alignSelf,
  justifySelf,
}) => {
  if (
    !elementVariant ||
    (Array.isArray(elementVariant) && !elementVariant.length)
  ) {
    return null
  }

  const elements: Array<CommonElementProps> = [elementVariant].flat()

  return (
    <Stack
      gridArea={gridArea}
      justifySelf={justifySelf}
      alignSelf={alignSelf}
      direction="row"
      alignItems="center"
      spacing={0.5}
    >
      {elements.map((e, index) => (
        <CommonElement key={index} {...e} />
      ))}
    </Stack>
  )
}

export default Area
