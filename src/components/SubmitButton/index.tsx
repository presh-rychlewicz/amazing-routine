import { Stack } from '@mui/joy'
import ButtonElement from 'components/CommonElement/ButtonElement'
import { FC } from 'react'

type SubmitButtonProps = {
  label?: string
  handleSubmit: () => void
}

const SubmitButton: FC<SubmitButtonProps> = ({
  handleSubmit,
  label = 'Submit',
}) => (
  <Stack alignItems="flex-end">
    <ButtonElement label={label} type="submit" onClick={handleSubmit} />
  </Stack>
)

export default SubmitButton
export type { SubmitButtonProps }
