import { Stack } from '@mui/joy'
import { FormField, SubmitButton } from 'components'
import { Dispatch, PropsWithChildren, SetStateAction } from 'react'
import { Field, FormError } from 'schemas'
import getFormFieldProps from './getFormFieldProps'
import { SubmitButtonProps } from 'components/SubmitButton'

type AddFormBodyTemplate<ValuesT extends ValuesTBase> = {
  error: FormError<ValuesT>
  isSubmitting: boolean
  isEdit?: boolean
  setValues: Dispatch<SetStateAction<ValuesT>>
  values: ValuesT
  fields: Array<Field<ValuesT>>
} & Omit<SubmitButtonProps, 'label'>

const AddFormBodyTemplate = <ValuesT extends Record<string, any>>({
  error,
  handleSubmit,
  values,
  fields,
  setValues,
  isEdit = false,
  isSubmitting,
  children,
}: PropsWithChildren<AddFormBodyTemplate<ValuesT>>) => (
  <Stack spacing={1} component="form" onSubmit={(e) => e.preventDefault()}>
    {fields.map((field) => {
      const formFieldProps = getFormFieldProps(
        error,
        field,
        values,
        setValues,
        isSubmitting
      )

      return <FormField {...formFieldProps} key={field.key as string} />
    })}

    {children}

    <SubmitButton label={isEdit ? 'Edit' : 'Add'} handleSubmit={handleSubmit} />
  </Stack>
)

type ValuesTBase = Record<string, any>

export default AddFormBodyTemplate
export type { AddFormBodyTemplate }
