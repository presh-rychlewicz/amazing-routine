import { Grid } from '@mui/joy'
import { Children, FC, PropsWithChildren } from 'react'
import { BottomMenu } from './components'

type Props = {
  shouldShowMenu?: boolean
}

const Route: FC<PropsWithChildren<Props>> = ({
  children,
  shouldShowMenu = true,
}) => {
  const childrenCount = Children.count(children)

  return (
    <>
      <Grid
        component="main"
        height="100%"
        display="grid"
        gridAutoColumns="1fr"
        gridTemplateRows={(() => {
          if (childrenCount > MAX_PAGE_CHILDREN_COUNT) {
            throw new Error('<Route /> cannot have more that 3 children')
          }

          if (childrenCount === MAX_PAGE_CHILDREN_COUNT) {
            return 'auto 1fr auto'
          }

          return 'auto 1fr'
        })()}
        gridAutoRows=""
        gap={1}
        sx={{
          '&>*:first-child': {
            paddingX: INNER_PADDING,
          },
          '&>*:last-child': {
            paddingX: INNER_PADDING,
          },
          '&>*:nth-child(2)': {
            overflowY: 'scroll',
            paddingX: INNER_PADDING,
          },
          overflowY: 'hidden',
        }}
      >
        {children}
      </Grid>

      {shouldShowMenu && <BottomMenu />}
    </>
  )
}

const MAX_PAGE_CHILDREN_COUNT = 3
const INNER_PADDING = 1

export default Route
