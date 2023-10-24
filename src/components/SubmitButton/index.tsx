import { Button, Stack } from '@mui/joy'
import { FC } from 'react'
import { ReturnUseAddForm } from 'schemas'

type Props = {
  label: string
  handleSubmit: ReturnUseAddForm<any>['handleSubmit']
}

const SubmitButton: FC<Props> = ({ handleSubmit, label }) => (
  <Stack alignItems="flex-end">
    <Button type="submit" onClick={handleSubmit} size="md">
      {label}
    </Button>
  </Stack>
)

export default SubmitButton
