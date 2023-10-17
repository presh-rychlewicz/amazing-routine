import { Stack } from '@mui/joy'
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
        topLeft={{
          type: 'TEXT',
          content: 'Add task',
          level: 'h4',
        }}
        topRight={{
          type: 'X_BUTTON',
          onClick: () => navigate(routes.routines.children.index.absolute),
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

          // @ts-ignore
          return <FormField {...formFieldProps} />
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
