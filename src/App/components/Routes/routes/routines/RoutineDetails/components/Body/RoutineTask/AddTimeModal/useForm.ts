import { useAddForm, useStoreDispatch } from 'hooks'
import { Field, SingleTask } from 'schemas'

const useForm = (taskId: SingleTask['id'], onClose: () => void) => {
  const storeDispatch = useStoreDispatch()
  const { values, setValues, error, isSubmitting, getHandleSubmit } =
    useAddForm(initialValues, fields)

  const handleSubmit = () =>
    getHandleSubmit({
      actualJob: () => {
        storeDispatch.tasks.addTime({
          durationInSeconds: parseInt(values.duration) * 60,
          id: taskId,
        })
        onClose()
      },
      pathToGoAfterSubmitting: undefined,
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
  duration: string
}

const initialValues: Values = {
  duration: '3',
}

const fields: Array<Field<Values>> = [
  {
    autofocus: true,
    key: 'duration',
    required: true,
    type: 'number',
  },
]

export default useForm
export { fields }
