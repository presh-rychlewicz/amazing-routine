import { Box, Stack, Typography } from '@mui/joy'
import { FC, PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'
import BottomMenu from './BottomMenu'

const Route: FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation()
  const viewName = pathname
    .slice(pathname.indexOf('/') + 1)
    .toUpperCase()
    .replace('-', '_')
  const caption = `[${viewName}]`

  return (
    <Stack spacing={1} padding={1} height="100%" position="relative">
      <Typography level="body-xs">{caption}</Typography>

      <Box
        height="100%"
        sx={{
          overflowY: 'scroll',
        }}
      >
        {children}
      </Box>

      <BottomMenu />
    </Stack>
  )
}

export default Route
