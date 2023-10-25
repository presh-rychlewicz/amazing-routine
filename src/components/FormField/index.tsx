import { Input, Option, Select } from '@mui/joy'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import { ChangeEvent, FocusEvent, KeyboardEvent, ReactNode } from 'react'
import FieldWrapper from './FieldWrapper'

type FormFieldProps = {
  errorMessage: string | undefined
  isError?: boolean
  isRequired?: boolean
  label: string
} & (
  | {
      type: 'date' | 'number' | 'time' | 'text'
      autoFocus?: boolean
      value: string
      isDisabled?: boolean
      onChange: (e: ChangeEvent<HTMLInputElement>) => void
    }
  | {
      type: 'checkbox_group'
      onChange: (e: ChangeEvent<HTMLInputElement>) => void
      options: Array<{
        label: string
        isChecked: boolean
      }>
    }
  | {
      type: 'select'
      onChange: (
        event:
          | React.MouseEvent<Element, MouseEvent>
          | KeyboardEvent<Element>
          | FocusEvent<Element, Element>
          | null,
        value: {} | null
      ) => void

      options: Array<{
        label: string
        value: string
      }>
      value: string
      placeholder?: string
    }
)

const FormField = (props: FormFieldProps) => {
  let content: ReactNode
  if (
    props.type === 'number' ||
    props.type === 'time' ||
    props.type === 'text' ||
    props.type === 'date'
  ) {
    content = (
      <Input
        // TODO: this seems to not work
        autoFocus={props.autoFocus}
        disabled={props.isDisabled}
        required={props.isRequired}
        value={props.value}
        type={props.type}
        onChange={props.onChange}
      />
    )
  }

  if (props.type === 'checkbox_group') {
    content = (
      <FormGroup>
        {props.options.map((o) => (
          <FormControlLabel
            key={o.label}
            control={
              <Checkbox checked={o.isChecked} onChange={props.onChange} />
            }
            label={o.label}
          />
        ))}
      </FormGroup>
    )
  }

  if (props.type === 'select') {
    content = (
      <Select placeholder={props.placeholder} onChange={props.onChange}>
        {props.options.map(({ label, value }) => (
          <Option key={value} value={value}>
            {label}
          </Option>
        ))}
      </Select>
    )
  }

  if (!content) {
    return null
  }

  return (
    <FieldWrapper
      isRequired={props.isRequired}
      isError={props.isError}
      label={props.label}
      errorMessage={props.errorMessage}
    >
      {content}
    </FieldWrapper>
  )
}

export default FormField
export type { FormFieldProps }
