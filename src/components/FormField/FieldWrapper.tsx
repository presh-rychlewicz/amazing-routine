import { FormControl, FormHelperText, FormLabel } from '@mui/joy'
import { FC, PropsWithChildren } from 'react'

type Props = {
  isError: boolean | undefined
  isRequired: boolean | undefined
  label: string
  errorMessage?: string
}

const FieldWrapper: FC<PropsWithChildren<Props>> = ({
  isError,
  isRequired,
  label,
  children,
  errorMessage,
}) => {
  const visibleLabel = `${label}${isRequired ? '*' : ''}`

  return (
    <FormControl error={isError}>
      <FormLabel>{visibleLabel}</FormLabel>

      {children}

      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  )
}

export default FieldWrapper
