import { Input } from '@mui/joy'
import { ChangeEvent, FC, ReactNode } from 'react'
import Field from './Field'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

type Props = {
  errorMessage: string | undefined
  isDisabled?: boolean
  isError?: boolean
  isRequired?: boolean
  label: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
} & (
  | {
      type: 'number' | 'time' | 'text' | 'date'
      options?: undefined
      value: string
    }
  | {
      type: 'checkbox_group'
      options: Array<{
        label: string
        isChecked: boolean
      }>
      value?: undefined
    }
)

const FormField: FC<Props> = ({
  errorMessage,
  isDisabled,
  isError,
  isRequired,
  label,
  onChange,
  type,
  value,
  options,
}) => {
  let content: ReactNode
  if (['number', 'time', 'text', 'date'].includes(type)) {
    content = (
      <Input
        disabled={isDisabled}
        required={isRequired}
        value={value}
        onChange={onChange}
        type={type}
      />
    )
  }

  if (type === 'checkbox_group') {
    content = (
      <FormGroup>
        {options.map((o) => (
          <FormControlLabel
            key={o.label}
            control={<Checkbox checked={o.isChecked} onChange={onChange} />}
            label={o.label}
          />
        ))}
      </FormGroup>
    )
  }

  return (
    <Field
      isRequired={isRequired}
      isError={isError}
      label={label}
      errorMessage={errorMessage}
    >
      {content}
    </Field>
  )
}

export default FormField
