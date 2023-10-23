import { Button, Stack } from '@mui/joy'
import { FC } from 'react'

type Props = {
  label: string
  handleSubmit: () => void
}

const SubmitButton: FC<Props> = ({ handleSubmit, label }) => (
  <Stack alignItems="flex-end">
    <Button type="submit" onClick={handleSubmit} size="md">
      {label}
    </Button>
  </Stack>
)

export default SubmitButton
