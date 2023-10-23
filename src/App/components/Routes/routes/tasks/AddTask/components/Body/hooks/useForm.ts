import dayjs from 'dayjs'
import { useAddForm, useStoreDispatch } from 'hooks'
import { useLocation } from 'react-router-dom'
import { Field } from 'schemas'

const useForm = (returnPath: string | undefined) => {
  const storeDispatch = useStoreDispatch()
  const { state } = useLocation()
  const { values, setValues, error, isSubmitting, getHandleSubmit } =
    useAddForm(initialValues, fields)

  const handleSubmit = () =>
    getHandleSubmit({
      actualJob: () =>
        storeDispatch.tasks.add({
          durationInSeconds:
            values.duration !== ''
              ? dayjs.duration(parseInt(values.duration), 'minutes').asSeconds()
              : undefined,
          name: values.name,
          note: values.note || undefined,
          routineId: state && state.routineId ? state.routineId : undefined,
        }),
      pathToGoAfterSubmitting: returnPath,
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
  duration: string
}

const initialValues: Values = {
  duration: '',
  name: '',
  note: '',
}

const fields: Array<Field<Values>> = [
  {
    key: 'name',
    required: true,
    type: 'text',
  },
  {
    key: 'duration',
    type: 'number',
  },
  {
    key: 'note',
    type: 'text',
  },
]

export default useForm
export { fields }
