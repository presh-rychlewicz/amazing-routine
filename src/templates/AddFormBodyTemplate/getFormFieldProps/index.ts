import { FormFieldProps } from 'components/FormField'
import { FormError } from 'hooks/useAddForm'
import { Dispatch, SetStateAction } from 'react'
import { Field } from 'schemas'
import getFieldLabel from './getFieldLabel'

const KEY_INDEX = 0
const MESSAGE_INDEX = 1

function getFormFieldProps<
  ValuesT extends Record<string, string>,
  FieldT extends Field<ValuesT>
>(
  error: FormError<ValuesT>,
  field: FieldT,
  values: ValuesT,
  setValues: Dispatch<SetStateAction<ValuesT>>,
  isSubmitting: boolean
): FormFieldProps {
  const { key } = field
  const isError = error?.[KEY_INDEX] === key

  const onChange = (value: string) =>
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }))

  const common = {
    errorMessage: isError
      ? error?.[MESSAGE_INDEX] || 'Unknown error'
      : undefined,
    isError,
    isRequired: field.required,
    key: field.key,
    label: getFieldLabel(key as string),
  }

  if (
    field.type === 'number' ||
    field.type === 'time' ||
    field.type === 'text' ||
    field.type === 'date'
  ) {
    return {
      ...common,
      autoFocus: field.autofocus,
      isDisabled: isSubmitting,
      onChange: (event) => onChange(event.target.value),
      type: field.type,
      value: values[key],
    }
  }

  if (field.type === 'checkbox_group') {
    return {
      ...common,
      onChange: (event) => onChange(event.target.value),
      options: field.options,
      type: field.type,
    }
  }

  if (field.type === 'select') {
    return {
      ...common,
      onChange: (event) => {
        if (event) {
          // @ts-ignore
          const selectedOptionLabel = event.target.textContent
          const selectedOption = field.options.find(
            (o) => o.label === selectedOptionLabel
          )

          if (selectedOption) {
            return onChange(selectedOption.value)
          }
        }
      },
      options: field.options,
      placeholder: field.placeholder,
      type: field.type,
    }
  }

  throw new Error('Some error')
}

export default getFormFieldProps
