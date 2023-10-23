import { Stack } from '@mui/joy'
import { FormField, SubmitButton } from 'components'
import { getFormFieldProps } from 'utils'
import { fields, useForm } from '../../hooks'
import { DAYS } from 'config'

const Body = () => {
  const { error, isSubmitting, values, setValues, handleSubmit } = useForm()
  const days = DAYS.map((day, index) => ({
    isChecked: values.days[index],
    label: day,
  }))

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

        // @ts-ignore
        return <FormField {...formFieldProps} key={formFieldProps.key} />
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
            const index = DAYS.indexOf(e.target.computedName)
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
  )
}

export default Body
