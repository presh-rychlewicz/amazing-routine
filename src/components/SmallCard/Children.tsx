import { Stack, Typography } from '@mui/joy'
import { FC } from 'react'
import CommonElement, { CommonElementProps } from '../CommonElement'
import { getShouldShowElements } from './utils'

type ChildrenProps = {
  elements?: Array<CommonElementProps>
  subtitle?: string | JSX.Element
}

const Children: FC<ChildrenProps> = ({ subtitle, elements }) => {
  const shouldShowElements = getShouldShowElements(elements)
  if (!shouldShowElements && !subtitle) {
    return null
  }

  if (shouldShowElements) {
    return (
      <Stack direction="row" spacing={0.5} alignItems="center">
        {elements?.map((e, index) => (
          <CommonElement key={index} {...e} />
        ))}
      </Stack>
    )
  }

  if (subtitle) {
    return <Typography level="body-xs">{subtitle}</Typography>
  }

  return null
}

export default Children
export type { ChildrenProps }
