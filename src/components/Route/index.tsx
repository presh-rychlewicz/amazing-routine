import { Grid, Typography } from '@mui/joy'
import { Children, FC, PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'
import { BottomMenu } from './components'

const Route: FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation()
  const viewName = pathname
    .slice(pathname.indexOf('/') + 1)
    .toUpperCase()
    .replace('-', '_')
  const caption = `[${viewName}]`

  const childrenCount = Children.count(children)

  return (
    <>
      <Typography
        paddingX={INNER_PADDING}
        component="header"
        level="body-xs"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
      >
        {caption}
      </Typography>

      <Grid
        component="main"
        height="100%"
        display="grid"
        gridAutoColumns="1fr"
        gridTemplateRows={(() => {
          if (childrenCount > 3) {
            throw new Error('<Route /> cannot have more that 3 children')
          }

          if (childrenCount === 3) {
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

      <BottomMenu />
    </>
  )
}

const INNER_PADDING = 1

export default Route
