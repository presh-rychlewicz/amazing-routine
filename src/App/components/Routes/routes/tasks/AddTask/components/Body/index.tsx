import { Stack } from '@mui/joy'
import { FormField, SubmitButton } from 'components'
import { paths } from 'config'
import { useLocation } from 'react-router-dom'
import { getFormFieldProps } from 'utils'
import { fields, useForm } from './hooks'

const Body = () => {
  const { state } = useLocation()
  const returnPath =
    state && state.returnPath
      ? state.returnPath.slice(1)
      : paths.tasks.children.index.absolute

  const { error, isSubmitting, values, handleSubmit, setValues } =
    useForm(returnPath)

  return (
    <Stack spacing={1} component="form" onSubmit={(e) => e.preventDefault()}>
      {fields.map((field) => {
        const formFieldProps = getFormFieldProps<typeof values, typeof field>(
          error,
          field,
          values,
          setValues,
          isSubmitting
        )

        return <FormField {...formFieldProps} key={formFieldProps.key} />
      })}

      <SubmitButton label="Add" handleSubmit={handleSubmit} />
    </Stack>
  )
}

export default Body
