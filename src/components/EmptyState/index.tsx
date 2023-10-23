import { Stack, Typography } from '@mui/joy'
import { FC } from 'react'

type Props = {
  message?: string
}

const EmptyState: FC<Props> = ({ message = 'This list is empty' }) => (
  <Stack alignItems="center" width="100%">
    <Typography>{message}</Typography>
  </Stack>
)

export default EmptyState
