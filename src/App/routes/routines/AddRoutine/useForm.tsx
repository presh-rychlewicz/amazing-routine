import { useAddForm } from '../../../../hooks'
import { useStoreDispatch } from '../../../../store'
import { Field, routes } from '../../../../types'

const useForm = () => {
  const storeDispatch = useStoreDispatch()
  const { values, setValues, getHandleSubmit, isSubmitting, error } =
    useAddForm<Values>(initialValues, fields)

  const handleSubmit = () =>
    getHandleSubmit({
      actualJob: () =>
        storeDispatch.routines.add({
          name: values.name,
          note: values.note || undefined,
          days: values.days,
          time: values.time || undefined,
          startDate: values.startDate,
          endDate: values.endDate,
          interval: parseInt(values.interval),
        }),
      pathToGoAfterSubmitting: routes.routines.children.index.absolute,
    })

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

const initialValues: Values = {
  name: '',
  note: '',
  time: '',
  startDate: '',
  endDate: undefined,
  days: [true, true, true, true, true, false, false],
  interval: '1',
}

const fields: Array<Field<Values>> = [
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
