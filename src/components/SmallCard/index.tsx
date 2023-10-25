import { Card, Stack, Typography, VariantProp } from '@mui/joy'
import { FC } from 'react'
import { Children, ChildrenProps } from './components'
import { getShouldShowElements } from './utils'

type Props = {
  title: string
  variant?: VariantProp
} & ChildrenProps

const SmallCard: FC<Props> = ({
  variant = 'soft',
  title,
  subtitle,
  elements,
}) => {
  const shouldShowElements = getShouldShowElements(elements)

  return (
    <Card
      orientation="horizontal"
      variant={variant}
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Stack>
        <Typography>{title}</Typography>

        {subtitle && shouldShowElements && (
          <Typography level="body-xs">{subtitle}</Typography>
        )}
      </Stack>

      <Children subtitle={subtitle} elements={elements} />
    </Card>
  )
}

export default SmallCard
