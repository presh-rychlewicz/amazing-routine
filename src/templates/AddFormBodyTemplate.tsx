import { Stack } from '@mui/joy'
import { FormField, SubmitButton } from 'components'
import { PropsWithChildren } from 'react'
import { ReturnUseAddForm } from 'schemas'
import { getFormFieldProps } from 'utils'

type Props<ValuesT extends Record<string, any>> = {
  useFormReturn: ReturnUseAddForm<ValuesT>
}

function Body<ValuesT extends Record<string, any>>({
  useFormReturn,
  children,
}: PropsWithChildren<Props<ValuesT>>) {
  return (
    <Stack spacing={1} component="form" onSubmit={(e) => e.preventDefault()}>
      {useFormReturn.fields.map((field) => {
        const formFieldProps = getFormFieldProps<ValuesT, typeof field>(
          useFormReturn.error,
          field,
          useFormReturn.values,
          useFormReturn.setValues,
          useFormReturn.isSubmitting
        )

        // @ts-ignore
        return <FormField {...formFieldProps} key={formFieldProps.key} />
      })}

      {children}

      <SubmitButton label="Add" handleSubmit={useFormReturn.handleSubmit} />
    </Stack>
  )
}

export default Body
