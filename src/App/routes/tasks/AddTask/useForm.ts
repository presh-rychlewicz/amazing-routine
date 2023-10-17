import { useLocation } from 'react-router-dom'
import { useAddForm } from '../../../../hooks'
import { useStoreDispatch } from '../../../../store'
import { Field } from '../../../../types'

const useForm = (returnPath: string | undefined) => {
  const storeDispatch = useStoreDispatch()
  const { state } = useLocation()
  const { values, setValues, error, isSubmitting, getHandleSubmit } =
    useAddForm(initialValues, fields)

  const handleSubmit = () =>
    getHandleSubmit({
      actualJob: () =>
        storeDispatch.tasks.add({
          name: values.name,
          note: values.note || undefined,
          routineId: state && state.routineId ? state.routineId : undefined,
          duration:
            values.duration !== '' ? parseInt(values.duration) : undefined,
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
  name: '',
  note: '',
  duration: '',
}

const fields: Array<Field<Values>> = [
  {
    key: 'name',
    type: 'text',
    required: true,
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
