import { useAddForm } from 'hooks'
import { useStoreDispatch } from 'hooks'
import { paths } from 'config'
import { Field } from 'schemas'
import { getUnixFromDateString } from 'utils'

const useForm = () => {
  const storeDispatch = useStoreDispatch()
  const { values, setValues, getHandleSubmit, isSubmitting, error } =
    useAddForm<Values>(initialValues, fields)

  const handleSubmit = () =>
    getHandleSubmit({
      actualJob: () =>
        storeDispatch.routines.add({
          days: values.days,
          endDateInUnix: values.endDateInUnix
            ? getUnixFromDateString(values.endDateInUnix)
            : undefined,
          interval: parseInt(values.interval),
          name: values.name,
          note: values.note || undefined,
          startDateInUnix: getUnixFromDateString(values.startDateInUnix),
          time: values.time || undefined,
        }),
      pathToGoAfterSubmitting: paths.routines.children.index.absolute,
    })

  return {
    error,
    handleSubmit,
    isSubmitting,
    setValues,
    values,
  }
}

type Values = {
  name: string
  note: string
  time: string
  startDateInUnix: string
  endDateInUnix: string | undefined
  days: [boolean, boolean, boolean, boolean, boolean, boolean, boolean]
  interval: string
}

const initialValues: Values = {
  days: [true, true, true, true, true, false, false],
  endDateInUnix: undefined,
  interval: '1',
  name: '',
  note: '',
  startDateInUnix: '',
  time: '',
}

const fields: Array<Field<Values>> = [
  {
    key: 'name',
    required: true,
    type: 'text',
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
    key: 'startDateInUnix',
    required: true,
    type: 'date',
  },
  {
    key: 'endDateInUnix',
    type: 'date',
  },
  {
    key: 'interval',
    required: true,
    type: 'number',
  },
]

export default useForm
export { fields }
