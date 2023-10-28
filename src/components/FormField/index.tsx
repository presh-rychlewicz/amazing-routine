import { FormControl, FormHelperText, FormLabel } from '@mui/joy'
import Content, { ContentProps } from './Content'

type FormFieldProps = ContentProps & {
  errorMessage: string | undefined
  isError?: boolean
  isRequired?: boolean
  label: string
}

const FormField = ({
  label,
  errorMessage,
  isError,
  ...props
}: FormFieldProps) => {
  const visibleLabel = `${label}${props.isRequired ? '*' : ''}`

  return (
    <FormControl error={isError}>
      <FormLabel>{visibleLabel}</FormLabel>

      <Content {...props} />

      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  )
}

export default FormField
export type { FormFieldProps }
