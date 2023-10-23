import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { FormError } from 'hooks/useAddForm'
import { getFieldLabel } from './utils'
import { Field } from 'schemas'

function getFormFieldProps<
  ValuesT extends Record<string, unknown>,
  FieldT extends Field<ValuesT>
>(
  error: FormError<ValuesT>,
  field: FieldT,
  values: ValuesT,
  setValues: Dispatch<SetStateAction<ValuesT>>,
  isSubmitting: boolean
): GetFormFieldProps<ValuesT, FieldT, FieldT['key']> {
  // TODO: replace as
  const key = field.key as string
  const isError = error?.[0] === key

  // TODO: remove ts-ignore
  // @ts-ignore
  return {
    autofocus: field.autofocus,
    errorMessage: isError ? error?.[1] || 'Unknown error' : undefined,
    isDisabled: isSubmitting,
    isError,
    isRequired: field.required,
    key,
    label: getFieldLabel(key),
    onChange: (event: ChangeEvent<HTMLInputElement>) =>
      setValues((prev) => ({
        ...prev,
        [key]: event.target.value,
      })),
    type: field.type,
    value: values[key],
  }
}

type GetFormFieldProps<
  ValuesT extends Record<string, unknown>,
  FieldT extends Field<ValuesT>,
  KeyT extends FieldT['key']
> = {
  autofocus?: boolean
  errorMessage: string | undefined
  isDisabled: boolean
  isError: boolean
  isRequired: FieldT['required']
  key: KeyT
  label: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  type: FieldT['type']
  value: ValuesT[KeyT]
}
export default getFormFieldProps
