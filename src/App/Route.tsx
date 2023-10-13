import { Stack, Typography } from '@mui/joy'
import { FC, PropsWithChildren } from 'react'
import { useRouteContext } from '../providers'

type Props = {
  title?: string
}

const Route: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  const { view } = useRouteContext()
  const caption = `[${view} VIEW]`

  return (
    <Stack spacing={1} padding={1}>
      <Typography level="body-xs">{caption}</Typography>

      {title && <Typography>{title}</Typography>}

      {children}
    </Stack>
  )
}

export default Route
