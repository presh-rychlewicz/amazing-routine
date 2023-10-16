import { Stack } from '@mui/joy'
import { FC } from 'react'
import getElement, { ElementVariant } from './getElement'

type Props = {
  left?: ElementVariant
  right?: ElementVariant
}

const HeaderGeneric: FC<Props> = ({ left, right }) => {
  if (!left && !right) {
    return null
  }

  const leftElem = getElement(left)
  const rightElem = getElement(right)

  return (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      marginBottom={1}
    >
      {leftElem}

      {rightElem}
    </Stack>
  )
}

export default HeaderGeneric
