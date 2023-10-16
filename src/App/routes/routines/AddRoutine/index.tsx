import { Stack } from '@mui/joy'
import { FormField, HeaderGeneric, SubmitButton } from '../../../../components'
import { getFieldLabel } from '../../../../utils'
import Route from '../../Route'
import useForm, { fields } from './useForm'
import { useNavigate } from '../../../../hooks'
import { routes } from '../../../../types'

const AddRoutine = () => {
  const navigate = useNavigate()
  const { error, isSubmitting, values, setValues, handleSubmit } = useForm()
  const days = DAY_OPTIONS.map((day, index) => ({
    label: day,
    isChecked: values.days[index],
  }))

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
          onClick: () => navigate(routes.routines.core),
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
              // @ts-expect-error
              value={values[key]}
              key={key}
              label={getFieldLabel(key)}
              isDisabled={isSubmitting}
              type={type}
            />
          )
        })}

        <FormField
          options={days}
          label="Days"
          isRequired
          type="checkbox_group"
          isError={error?.[0] === 'days'}
          errorMessage={undefined}
          onChange={(e) =>
            setValues((prev) => {
              const newDays = prev.days
              // @ts-ignore
              const index = DAY_OPTIONS.indexOf(e.target.computedName)
              newDays[index] = e.target.checked

              return {
                ...prev,
                days: newDays,
              }
            })
          }
        />

        <SubmitButton label="Add" handleSubmit={handleSubmit} />
      </Stack>
    </Route>
  )
}

export const DAY_OPTIONS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

export default AddRoutine
