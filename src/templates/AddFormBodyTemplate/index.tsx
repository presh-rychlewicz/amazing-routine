import { Stack } from '@mui/joy'
import { FormField, SubmitButton } from 'components'
import { PropsWithChildren } from 'react'
import { ReturnUseAddForm } from 'schemas'
import getFormFieldProps from './getFormFieldProps'

type Props<ValuesT extends ValuesTBase> = {
  useFormReturn: ReturnUseAddForm<ValuesT>
}

function AddFormBodyTemplate<ValuesT extends Record<string, any>>({
  useFormReturn,
  children,
}: PropsWithChildren<Props<ValuesT>>) {
  return (
    <Stack spacing={1} component="form" onSubmit={(e) => e.preventDefault()}>
      {useFormReturn.fields.map((field) => {
        const formFieldProps = getFormFieldProps(
          useFormReturn.error,
          field,
          useFormReturn.values,
          useFormReturn.setValues,
          useFormReturn.isSubmitting
        )

        return <FormField {...formFieldProps} key={field.key as string} />
      })}

      {children}

      <SubmitButton label="Add" handleSubmit={useFormReturn.handleSubmit} />
    </Stack>
  )
}

type ValuesTBase = Record<string, any>

export default AddFormBodyTemplate
