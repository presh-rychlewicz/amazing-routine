import { Card, Stack, Typography } from '@mui/joy'
import { FC } from 'react'
import { Children, ChildrenProps } from './components'
import { getShouldShowElements } from './utils'

type Props = {
  title: string
} & ChildrenProps

const SmallCard: FC<Props> = ({ title, subtitle, elements }) => {
  const shouldShowElements = getShouldShowElements(elements)

  return (
    <Card
      orientation="horizontal"
      variant="soft"
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
