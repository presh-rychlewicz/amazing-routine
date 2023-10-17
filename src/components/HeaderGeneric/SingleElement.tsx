import { Stack } from '@mui/joy'
import { FC, Fragment, ReactNode } from 'react'

type Props = {
  element: ReactNode
  gridArea: string
  alignSelf?: string
  justifySelf?: string
}

const SingleElement: FC<Props> = ({
  element,
  gridArea,
  alignSelf,
  justifySelf,
}) => {
  if (!element) {
    return null
  }

  return (
    <Stack
      gridArea={gridArea}
      justifySelf={justifySelf}
      alignSelf={alignSelf}
      direction="row"
      alignItems="center"
      spacing={0.5}
    >
      {Array.isArray(element) &&
        element.map((e, index) => <Fragment key={index}>{e}</Fragment>)}
    </Stack>
  )
}

export default SingleElement
