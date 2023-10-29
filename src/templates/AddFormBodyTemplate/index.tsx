import { Stack } from '@mui/joy'
import { FormField, SubmitButton } from 'components'
import { FormError } from 'hooks'
import { Dispatch, PropsWithChildren, SetStateAction } from 'react'
import { Field } from 'schemas'
import getFormFieldProps from './getFormFieldProps'
import { SubmitButtonProps } from 'components/SubmitButton'

type AddFormBodyTemplateProps<ValuesT extends ValuesTBase> = {
  error: FormError<ValuesT>
  isSubmitting: boolean
  setValues: Dispatch<SetStateAction<ValuesT>>
  values: ValuesT
  fields: Array<Field<ValuesT>>
} & SubmitButtonProps

const AddFormBodyTemplate = <ValuesT extends Record<string, any>>({
  error,
  handleSubmit,
  values,
  fields,
  setValues,
  label = 'Add',
  isSubmitting,
  children,
}: PropsWithChildren<AddFormBodyTemplateProps<ValuesT>>) => (
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

    <SubmitButton label={label} handleSubmit={handleSubmit} />
  </Stack>
)

type ValuesTBase = Record<string, any>

export default AddFormBodyTemplate
export type { AddFormBodyTemplateProps }
