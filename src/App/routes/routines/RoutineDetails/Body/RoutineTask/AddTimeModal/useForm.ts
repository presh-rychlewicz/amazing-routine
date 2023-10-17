import { useAddForm } from '../../../../../../../hooks'
import { useStoreDispatch } from '../../../../../../../store'
import { SingleTask } from '../../../../../../../store/reducers/tasks/types'
import { Field } from '../../../../../../../types'

const useForm = (taskId: SingleTask['id'], onClose: () => void) => {
  const storeDispatch = useStoreDispatch()
  const { values, setValues, error, isSubmitting, getHandleSubmit } =
    useAddForm(initialValues, fields)

  const handleSubmit = () =>
    getHandleSubmit({
      actualJob: () => {
        storeDispatch.tasks.addTime({
          id: taskId,
          duration: parseInt(values.duration),
        })
        onClose()
      },
      pathToGoAfterSubmitting: undefined,
    })

  return {
    values,
    setValues,
    error,
    isSubmitting,
    handleSubmit,
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
    key: 'duration',
    type: 'number',
    required: true,
    autofocus: true,
  },
]

export default useForm
export { fields }
