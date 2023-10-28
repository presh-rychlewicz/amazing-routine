import { Stack } from '@mui/joy'
import ButtonElement from 'components/CommonElement/ButtonElement'
import { FC } from 'react'
import { ReturnUseAddForm } from 'schemas'

type Props = {
  label: string
  handleSubmit: ReturnUseAddForm<any>['handleSubmit']
}

const SubmitButton: FC<Props> = ({ handleSubmit, label }) => (
  <Stack alignItems="flex-end">
    <ButtonElement label={label} type="submit" onClick={handleSubmit} />
  </Stack>
)

export default SubmitButton
