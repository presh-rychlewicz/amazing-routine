import { FormField } from 'components'
import { DAYS } from 'config'
import { AddFormBodyTemplate } from 'templates'
import { useForm } from './hooks'

const Body = () => {
  const useFormReturn = useForm()
  const days = DAYS.map((day, index) => ({
    isChecked: useFormReturn.values.days[index],
    label: day,
  }))

  return (
    <AddFormBodyTemplate useFormReturn={useFormReturn}>
      <FormField
        options={days}
        label="Days"
        isRequired
        type="checkbox_group"
        isError={useFormReturn.error?.[0] === 'days'}
        errorMessage={undefined}
        onChange={(e) =>
          useFormReturn.setValues((prev) => {
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
    </AddFormBodyTemplate>
  )
}

export default Body
