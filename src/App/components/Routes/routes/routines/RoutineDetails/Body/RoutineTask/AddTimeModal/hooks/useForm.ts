import { useAddForm, useStoreDispatch } from 'hooks'
import { Field, ReturnUseAddForm, SingleTask } from 'schemas'

const useForm = (
  taskId: SingleTask['id'],
  onClose: () => void
): ReturnUseAddForm<Values> => {
  const storeDispatch = useStoreDispatch()
  const { getHandleSubmit, restValues } = useAddForm({
    fields,
    initialValues,
    pathToGoAfterSubmitting: undefined,
  })

  return {
    handleSubmit: () =>
      getHandleSubmit((values) => {
        storeDispatch.tasks.addTime({
          durationInSeconds: parseInt(values.duration) * 60,
          id: taskId,
        })
        onClose()
      }),
    ...restValues,
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
