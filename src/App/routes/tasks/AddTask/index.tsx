import { Stack } from '@mui/joy'
import { useLocation } from 'react-router-dom'
import {
  FormField,
  HeaderGeneric,
  Route,
  SubmitButton,
} from '../../../../components'
import { useNavigate } from '../../../../hooks'
import { routes } from '../../../../types'
import { getFormFieldProps } from '../../../../utils'
import useForm, { fields } from './useForm'

const AddTask = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const returnPath =
    state && state.returnPath
      ? state.returnPath.slice(1)
      : routes.tasks.children.index.absolute

  const { error, isSubmitting, values, handleSubmit, setValues } =
    useForm(returnPath)

  return (
    <Route>
      <HeaderGeneric
        topLeft={{
          type: 'TEXT',
          content: 'Add task',
          level: 'h4',
        }}
        topRight={{
          type: 'X_BUTTON',
          onClick: () => navigate(returnPath),
        }}
      />

      <Stack spacing={1} component="form" onSubmit={(e) => e.preventDefault()}>
        {fields.map((field) => {
          const formFieldProps = getFormFieldProps<typeof values, typeof field>(
            error,
            field,
            values,
            setValues,
            isSubmitting
          )

          return <FormField {...formFieldProps} />
        })}

        <SubmitButton label="Add" handleSubmit={handleSubmit} />
      </Stack>
    </Route>
  )
}

export default AddTask
