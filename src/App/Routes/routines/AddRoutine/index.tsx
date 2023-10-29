import { FormField, Route } from 'components'
import { AddFormBodyTemplate, AddFormHeaderTemplate } from 'templates'
import { useForm } from './hooks'
import { DAYS } from 'config'

const AddRoutine = () => {
  const useFormReturn = useForm()
  const days = DAYS.map((day, index) => ({
    isChecked: useFormReturn.bodyProps.values.days[index],
    label: day,
  }))

  return (
    <Route>
      <AddFormHeaderTemplate {...useFormReturn.headerProps} />

      <AddFormBodyTemplate {...useFormReturn.bodyProps}>
        <FormField
          key="days"
          options={days}
          label="Days"
          isRequired
          type="checkbox_group"
          // eslint-disable-next-line @typescript-eslint/no-magic-numbers
          isError={useFormReturn.bodyProps.error?.[0] === 'days'}
          errorMessage={undefined}
          onChange={(e, index) => {
            useFormReturn.bodyProps.setValues((prev) => {
              const newDays = [...prev.days] as typeof prev.days
              newDays[index] = e.target.checked

              return {
                ...prev,
                days: newDays,
              }
            })
          }}
        />
      </AddFormBodyTemplate>
    </Route>
  )
}

export default AddRoutine
