import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { FormError } from '../hooks/useAddForm'
import { Field } from '../types'
import getFieldLabel from './getFieldLabel'

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
  // TODO
  const key = field.key as string
  const isError = error?.[0] === key

  // TODO
  // @ts-ignore
  return {
    errorMessage: isError ? error?.[1] || 'Unknown error' : undefined,
    isRequired: field.required,
    isError: isError,
    onChange: (event: ChangeEvent<HTMLInputElement>) =>
      setValues((prev) => ({
        ...prev,
        [key]: event.target.value,
      })),
    value: values[key],
    key: key,
    autofocus: field.autofocus,
    label: getFieldLabel(key),
    isDisabled: isSubmitting,
    type: field.type,
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
