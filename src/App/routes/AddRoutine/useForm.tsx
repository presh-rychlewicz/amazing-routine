import { useState } from 'react'
import { View, useRouteContext } from '../../../providers'
import { useStoreDispatch } from '../../../store'

const useForm = () => {
  const { setView } = useRouteContext()
  const { routines } = useStoreDispatch()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<[keyof Values, string]>()
  const [values, setValues] = useState<Values>({
    name: '',
    note: '',
    time: '',
    startDate: '',
    endDate: undefined,
    days: [true, true, true, true, true, false, false],
    interval: '1',
  })

  console.log(values)

  const handleSubmit = () => {
    // CHECK FOR ERRORS
    const emptyFields = fields
      .filter((f) => f.required)
      .map((f) => {
        const key = f.key
        const value = values[key]

        return {
          key: key,
          value: value,
          isEmpty: !value,
        }
      })
      .filter((f) => f.isEmpty)
    const firstError = emptyFields[0]

    if (firstError) {
      setError([firstError.key, 'This field cannot be empty'])
      return
    }
    //

    // DISABLE FIELDS
    setIsSubmitting(true)
    //

    // ADD ROUTINE TO REDUX
    routines.add({
      name: values.name,
      note: values.note,
      days: values.days,
      time: values.time || undefined,
      startDate: values.startDate,
      endDate: values.endDate,
      interval: parseInt(values.interval),
    })
    //

    // CLEAR FORM
    setValues((prev) => {
      const alfa = Object.entries(prev).map((entry) => [entry[0], ''])

      return Object.fromEntries(alfa)
    })
    //

    // ENABLE FIELDS
    setIsSubmitting(false)
    //

    // NAVIGATE TO ROUTINES_LIST
    setView(View.ROUTINES_LIST)
    //
  }

  return {
    error,
    isSubmitting,
    handleSubmit,
    values,
    setValues,
  }
}

type Values = {
  name: string
  note: string
  time: string
  startDate: string
  endDate: string | undefined
  days: [boolean, boolean, boolean, boolean, boolean, boolean, boolean]
  interval: string
}

type Field = {
  key: keyof Values
  type: 'text' | 'number' | 'date' | 'time'
  required?: true
}

const fields: Field[] = [
  {
    key: 'name',
    type: 'text',
    required: true,
  },
  {
    key: 'note',
    type: 'text',
  },
  {
    key: 'time',
    type: 'time',
  },
  {
    key: 'startDate',
    type: 'date',
    required: true,
  },
  {
    key: 'endDate',
    type: 'date',
  },
  {
    key: 'interval',
    type: 'number',
    required: true,
  },
]

export default useForm
export { fields }
