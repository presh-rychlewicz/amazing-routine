import { Stack } from '@mui/joy'
import { FormField, HeaderGeneric, SubmitButton } from '../../../../components'
import { getFieldLabel } from '../../../../utils'
import Route from '../../Route'
import useForm, { fields } from './useForm'
import { useLocation } from 'react-router-dom'
import { useNavigate } from '../../../../hooks'
import { routes } from '../../../../types'

const AddTask = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const returnPath =
    state && state.returnPath ? state.returnPath.slice(1) : routes.tasks.core

  const { error, isSubmitting, values, handleSubmit, setValues } =
    useForm(returnPath)

  return (
    <Route>
      <HeaderGeneric
        left={{
          type: 'TEXT',
          content: 'Add task',
          level: 'h4',
        }}
        right={{
          type: 'X_BUTTON',
          onClick: () => navigate(returnPath),
        }}
      />

      <Stack spacing={1} component="form" onSubmit={(e) => e.preventDefault()}>
        {fields.map(({ key, type, required }) => {
          const isError = error?.[0] === key

          return (
            <FormField
              errorMessage={isError ? error?.[1] || 'Unknown error' : undefined}
              isRequired={required}
              isError={isError}
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  [key]: event.target.value,
                }))
              }
              value={values[key]}
              key={key}
              label={getFieldLabel(key)}
              isDisabled={isSubmitting}
              type={type}
            />
          )
        })}

        <SubmitButton label="Add" handleSubmit={handleSubmit} />
      </Stack>
    </Route>
  )
}

export default AddTask
